// MVC Pattern
// Model: handle the data
// View: What the user can see
// Controller: Contains control logic

const API = (()=>{
    const url = "http://localhost:4232/courseList";
    const courseListPromise = fetch(url).then((res)=>{
        return res.json();
    });

    return {
        courseListPromise
    }
})();

const View = (()=>{
    const dom = {
        container: document.querySelector(".course_list"),
        selectedContainer: document.querySelector(".selected_courses .course_list"),
    }
    //function to generate template string
    const createTemp = (dataList)=> {
        let template = '';

        dataList.forEach((course) => {
            template += 
            `<div class = "course_item">
                ${course.courseName}<br>
                Course Type: ${course.required ? "Compulsory": "Elective"}<br>
                Credits: ${course.credit}
            </div>`;
        });
        return template;
    }
    // render the data within some element
    const render = (elem, template)=> {
        elem.innerHTML = template;
    }

    return {
        dom,
        createTemp,
        render
    }

})();

const Model = ((view, api)=>{
    const {dom, createTemp, render} = view;
    const {courseListPromise} = api;

    class Courses {
        #courseList;
        constructor(arr){
            this.#courseList = [];
        }
        set newList(newCourses) {
            this.#courseList = newCourses;
            // re-render template
            const template = createTemp(newCourses);
            render(dom.container,template);
        }
        get getCourseList() {
            return this.#courseList;
        }
    }

    return {
        Courses,
        courseListPromise
    }
})(View,API);

const Controller = ((model, view)=>{
    const {Courses,courseListPromise} = model;
    const {dom} = view;
    const courseList = new Courses();

    //initailized data
    const init = () => {
        courseListPromise.then((list)=>{
            courseList.newList = list;
        });
    }

    //select courses
    const selectCourse = () => {
        dom.container.addEventListener("click", (event) => { 
            //access the clicked course item
            if (event.target.classList.contains("course_item")) {
                //course selected is toggled
                event.target.classList.toggle("selected");

                //update total credits
                let total_credits = 0;
                //access all selected courses
                const selectedCourses = document.querySelectorAll(".course_item.selected");
                
                selectedCourses.forEach((selectedCourse) => {
                    //get index of selected course
                    const index = Array.from(dom.container.children).indexOf(selectedCourse);
                    //get course data from model
                    const course = courseList.getCourseList[index];
                    total_credits += course.credit;
                });

                //check credit limit
                if (total_credits > 18) {
                    alert("You can only choose up to 18 credits in one semester");
                    event.target.classList.remove("selected"); //undo selection
                    return;
                }

                document.getElementById("total_credits").textContent = ` Total Credits: ${total_credits}`;
            }
        });
    };

    // submit selected courses
    const submitCourse = () => {
    const btn = document.querySelector(".submit_btn");
    btn.addEventListener("click", () => {
        //access total credits and extract only number
        const totalText = document.getElementById("total_credits").textContent;
        const total_credits = totalText.replace("Total Credits: ", "").trim();

        //if confirmation, then submit
        if (window.confirm("You have chosen " + (total_credits) + " credits for this semester. You cannot change once you submit. Do you want to confirm?")) {
            const selectedCourses = [];
            //access all selected courses
            const courses = document.querySelectorAll(".course_item.selected");

            //for each selected course, get the data from model
            courses.forEach((item, index) => {
                if (item.classList.contains("selected")) {
                    //push into selected courses array
                    selectedCourses.push(courseList.getCourseList[index]);
                }
            });

            //render into selected courses section
            const template = view.createTemp(selectedCourses);
            view.render(dom.selectedContainer, template);

            //disable submit button
            btn.disabled = true;
            btn.textContent = "Submitted";
        }
    });
};

    const bootstrap = ()=> {
        init(),
        selectCourse(),
        submitCourse()
    }

    return {
        bootstrap
    }
})(Model, View);

Controller.bootstrap();
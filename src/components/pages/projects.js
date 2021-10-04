import React from "react";
import ProjectItem from "../project-item";


const ProjectsPage = () => {
    return (
        <div className={"project-page"}>
            <ProjectItem projectLink={"https://github.com/kalibri111/entery_task"}
                         projectDescription={"Вступительный проект на Django на стажировку в компанию \"Кейсистемс\""}
            />

            <ProjectItem projectLink={"https://github.com/kalibri111/ARMSnake"}
                         projectDescription={"Заключительный проект курса по ARM-микроконтроллерам в МФТИ"}
            />

            <ProjectItem projectLink={"https://github.com/kalibri111/Akinator"}
                         projectDescription={"Заключительный проект курса по \"промышленному\" программированию 1 семестра в МФТИ. Он и правда так назывался)"}
            />

            <ProjectItem projectLink={"https://github.com/kalibri111/TeleBot"}
                         projectDescription={"Телеграм-бот, написан в начале изучения Python"}
            />

            <ProjectItem projectLink={"https://github.com/kalibri111/StepStatistic"}
                         projectDescription={"Приложение для сбора данных с BLE-устройства, было нужно для проекта, по которому я получил грант УМНИК"}
            />

            <ProjectItem projectLink={"https://github.com/kalibri111/javael-to-feel/tree/v1.0"}
                         projectDescription={"Написанный на летней стажировке синтаксический анализатор - переводчик"}
            />
        </div>
    );
}

export default ProjectsPage;

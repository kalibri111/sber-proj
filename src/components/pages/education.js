import React from "react";

const EducationPage = () => {
    return (
        <div className={"education-page card bg-secondary card-body"}>
            <h6 className={"card-subtitle"}>ВУЗы, в которых я побывал (в порядке поступлений):</h6>
            <ul>
                <li>
                    <p className={"card-text"}>НИЯУ МИФИ, Электроника и автоматика физических установок - 1 семестр</p>
                </li>

                <li>
                    <p className={"card-text"}>ЧГУ им. И.Н.Ульянова, ЭиЭТ - 3 семестра</p>
                </li>

                <li>
                    <p className={"card-text"}>МФТИ, ФПМИ (ИВТ) - 2 семестра (и ныне там)</p>
                </li>
            </ul>

        </div>
    )
}

export default EducationPage;

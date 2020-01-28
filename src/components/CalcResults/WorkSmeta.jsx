import React from 'react';

const WorkSmeta = (props) => {

return (
<div className="container mb-3">
    <div className="quotation-summary">
        <h4>Стены. Перечень работ:</h4>
        <table className="table table-borderless">
            <thead className="mastercalc-background">
                <tr>
                    <th scope="col">Наименование работ</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="5" class="text-left">Выравнивание стен (черновая отделка)</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">нанесение грунтовки</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right"> 10.00 грн</td>
                    <td scope="col" class="text-right"> 130.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">монтаж фасадной сетки</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right"> 50.00 грн</td>
                    <td scope="col" class="text-right"> 650.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">выравнивание штукатуркой</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right"> 90.00 грн</td>
                    <td scope="col" class="text-right"> 1170.00 грн</td>
                </tr>
                <tr>
                    <th colspan="5" class="text-left">Укладка плитки на ровную поверхность стены</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">укладка керамической плитки и керамогранита на стены</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right"> 250.00 грн</td>
                    <td scope="col" class="text-right"> 3250.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">затирка швов</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right"> 50.00 грн</td>
                    <td scope="col" class="text-right"> 650.00 грн</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по работам:</th>
                    <th class="text-right">5850.00 грн</th>
                </tr>
            </tfoot>
        </table>
        <h4>Потолок. Перечень работ:</h4>
        <table class="table table-borderless">
            <thead class="mastercalc-background">
                <tr>
                    <th scope="col">Наименование работ</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="5" class="text-left">Устройство одноуровневого потолка из гипсокартона</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">установка потолка из гипсокартона</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 160.00 грн</td>
                    <td scope="col" class="text-right"> 640.00 грн</td>
                </tr>
                <tr>
                    <th colspan="5" class="text-left">Подготовка гипсокартона под чистовую отделку</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">грунтовка гипсокартона</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 18.00 грн</td>
                    <td scope="col" class="text-right"> 72.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">шпаклевка под стеклохолст</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 60.00 грн</td>
                    <td scope="col" class="text-right"> 240.00 грн</td>
                </tr>
                <tr>
                    <th colspan="5" class="text-left">Покраска потолка из гипсокартона</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">грунтовка перед покраской</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 18.00 грн</td>
                    <td scope="col" class="text-right"> 72.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">покраска</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 70.00 грн</td>
                    <td scope="col" class="text-right"> 280.00 грн</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по работам:</th>
                    <th class="text-right">1304.00 грн</th>
                </tr>
            </tfoot>
        </table>
        <h4>Пол. Перечень работ:</h4>
        <table class="table table-borderless">
            <thead class="mastercalc-background">
                <tr>
                    <th scope="col">Наименование работ</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="5" class="text-left">Демонтаж старой плитки</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">демонтаж плитки</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 80.00 грн</td>
                    <td scope="col" class="text-right"> 320.00 грн</td>
                </tr>
                <tr>
                    <th colspan="5" class="text-left">Выравнивание мокрой чистовой стяжкой</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">обеспыливание поверхности</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 10.00 грн</td>
                    <td scope="col" class="text-right"> 40.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">гидроизоляция рулонным полиэтиленом</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 25.00 грн</td>
                    <td scope="col" class="text-right"> 100.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">укладка утеплителя</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 30.00 грн</td>
                    <td scope="col" class="text-right"> 120.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">укладка демпферной ленты</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 15.00 грн</td>
                    <td scope="col" class="text-right"> 60.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">укладка армирующей сетки</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 30.00 грн</td>
                    <td scope="col" class="text-right"> 120.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">заливка чистовой стяжки 6 мм</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 50.00 грн</td>
                    <td scope="col" class="text-right"> 200.00 грн</td>
                </tr>
                <tr>
                    <th colspan="5" class="text-left">Укладка линолеума на чистовю стяжку</th>
                </tr>
                <tr>
                    <td scope="col" class="text-left">обеспыливание грунтовкой</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 10.00 грн</td>
                    <td scope="col" class="text-right"> 40.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">укладка линолеума без фиксации</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 60.00 грн</td>
                    <td scope="col" class="text-right"> 240.00 грн</td>
                </tr>
                <tr>
                    <td scope="col" class="text-left">установка пластикового плинтуса</td>
                    <td scope="col" class="text-right"> м2</td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right"> 30.00 грн</td>
                    <td scope="col" class="text-right"> 120.00 грн</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по работам:</th>
                    <th class="text-right">1360.00 грн</th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
)}

export default WorkSmeta;
import React from 'react';

const Materials = (props) => {

return (
<div className="container mb-3">
    <div className="quotation-summary">
        <h4>Стены. Материалы</h4>
        <table class="table table-borderless">
            <thead class="mastercalc-background">
                <tr>
                    <th scope="col">Материалы</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                    <th scope="col" class="text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-0" class="accordion-toggle">
                    <td scope="col" class="text-left"> грунтовка глубокопроникающая </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 5.2</td>
                    <td scope="col" class="text-right">22.14 грн </td>
                    <td scope="col" class="text-right"> 115.13 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-0" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="0"></supplier-materials-cards>
                                <supplier-materials-cards id="s4" suppliername="Новая Линия" el="#s4"
                                    items="[object Object]" index="1"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-1" class="accordion-toggle">
                    <td scope="col" class="text-left"> фасадная сетка </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 14.3</td>
                    <td scope="col" class="text-right"> 21.60 грн </td>
                    <td scope="col" class="text-right"> 308.88 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-1" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-2" class="accordion-toggle">
                    <td scope="col" class="text-left"> акриловая краска </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 1.04</td>
                    <td scope="col" class="text-right">19.86 грн </td>
                    <td scope="col" class="text-right"> 20.65 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-2" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-3" class="accordion-toggle">
                    <td scope="col" class="text-left"> уголок алюминиевый перфорированный </td>
                    <td scope="col" class="text-right"> м </td>
                    <td scope="col" class="text-right"> 8</td>
                    <td scope="col" class="text-right">4.92 грн </td>
                    <td scope="col" class="text-right"> 39.36 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-3" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object],[object Object]" index="0"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-4" class="accordion-toggle">
                    <td scope="col" class="text-left"> штукатурка гипсовая универсальная </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 110.5</td>
                    <td scope="col" class="text-right">5.11 грн </td>
                    <td scope="col" class="text-right"> 565.02 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-4" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s2" suppliername="27.ua" el="#s2" items="[object Object]"
                                    index="0"></supplier-materials-cards>
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="1"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-5" class="accordion-toggle">
                    <td scope="col" class="text-left"> плитка керамическая для стен </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 13</td>
                    <td scope="col" class="text-right">148.70 грн </td>
                    <td scope="col" class="text-right"> 1933.10 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-5" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-6" class="accordion-toggle">
                    <td scope="col" class="text-left"> клей для керамической плитки </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 39</td>
                    <td scope="col" class="text-right">4.69 грн </td>
                    <td scope="col" class="text-right"> 182.99 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-6" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id0-7" class="accordion-toggle">
                    <td scope="col" class="text-left"> плиточная затирка (фуга) </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 3.9</td>
                    <td scope="col" class="text-right">131.83 грн </td>
                    <td scope="col" class="text-right"> 514.15 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id0-7" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по материалам:</th>
                    <th class="text-right"> 3679.28 грн </th>
                </tr>
            </tfoot>
        </table>
    </div>
    <div materialscosttotal="0">
        <h4>Потолок. Материалы</h4>
        <table class="table table-borderless">
            <thead class="mastercalc-background">
                <tr>
                    <th scope="col">Материалы</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                    <th scope="col" class="text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-0" class="accordion-toggle">
                    <td scope="col" class="text-left"> гипсокартон стеновой </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 4.4</td>
                    <td scope="col" class="text-right">37.25 грн </td>
                    <td scope="col" class="text-right"> 163.90 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-0" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-1" class="accordion-toggle">
                    <td scope="col" class="text-left"> профиль потолочный CD </td>
                    <td scope="col" class="text-right"> м </td>
                    <td scope="col" class="text-right"> 11.6</td>
                    <td scope="col" class="text-right">12.57 грн </td>
                    <td scope="col" class="text-right"> 145.77 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-1" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object],[object Object]" index="0"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-2" class="accordion-toggle">
                    <td scope="col" class="text-left"> профиль направляющий UD </td>
                    <td scope="col" class="text-right"> м </td>
                    <td scope="col" class="text-right"> 8</td>
                    <td scope="col" class="text-right">7.90 грн </td>
                    <td scope="col" class="text-right"> 63.20 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-2" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="0"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-3" class="accordion-toggle">
                    <td scope="col" class="text-left"> удлинитель профилей </td>
                    <td scope="col" class="text-right"> м </td>
                    <td scope="col" class="text-right"> 0.8</td>
                    <td scope="col" class="text-right">38.83 грн </td>
                    <td scope="col" class="text-right"> 31.07 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-3" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="0"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-4" class="accordion-toggle">
                    <td scope="col" class="text-left"> грунтовка глубокопроникающая </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 1.2</td>
                    <td scope="col" class="text-right">22.14 грн </td>
                    <td scope="col" class="text-right"> 26.57 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-4" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="0"></supplier-materials-cards>
                                <supplier-materials-cards id="s4" suppliername="Новая Линия" el="#s4"
                                    items="[object Object]" index="1"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-5" class="accordion-toggle">
                    <td scope="col" class="text-left"> финишная шпаклевка </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 18</td>
                    <td scope="col" class="text-right">8.12 грн </td>
                    <td scope="col" class="text-right"> 146.09 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-5" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s2" suppliername="27.ua" el="#s2" items="[object Object]"
                                    index="0"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id1-6" class="accordion-toggle">
                    <td scope="col" class="text-left"> акриловая краска </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 0.32</td>
                    <td scope="col" class="text-right">19.86 грн </td>
                    <td scope="col" class="text-right"> 6.35 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id1-6" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по материалам:</th>
                    <th class="text-right"> 582.95 грн </th>
                </tr>
            </tfoot>
        </table>
    </div>
    <div materialscosttotal="0">
        <h4>Пол. Материалы</h4>
        <table class="table table-borderless">
            <thead class="mastercalc-background">
                <tr>
                    <th scope="col">Материалы</th>
                    <th scope="col" class="text-right">Ед. изм.</th>
                    <th scope="col" class="text-right">Кол-во</th>
                    <th scope="col" class="text-right">Цена</th>
                    <th scope="col" class="text-right">Стоимость</th>
                    <th scope="col" class="text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-0" class="accordion-toggle">
                    <td scope="col" class="text-left"> пленка полиэтиленовая </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 4.8</td>
                    <td scope="col" class="text-right">0.28 грн </td>
                    <td scope="col" class="text-right"> 1.37 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-0" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-1" class="accordion-toggle">
                    <td scope="col" class="text-left"> экструдированный пенополистерол 20мм </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right">44.43 грн </td>
                    <td scope="col" class="text-right"> 177.74 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-1" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-2" class="accordion-toggle">
                    <td scope="col" class="text-left"> демпферная лента </td>
                    <td scope="col" class="text-right"> мп </td>
                    <td scope="col" class="text-right"> 8</td>
                    <td scope="col" class="text-right">3.84 грн </td>
                    <td scope="col" class="text-right"> 30.72 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-2" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-3" class="accordion-toggle">
                    <td scope="col" class="text-left"> армирующая сварная сетка 25 100х100 </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 5.2</td>
                    <td scope="col" class="text-right">34.20 грн </td>
                    <td scope="col" class="text-right"> 177.84 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-3" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-4" class="accordion-toggle">
                    <td scope="col" class="text-left"> маяк для мокрой штукатурки </td>
                    <td scope="col" class="text-right"> мп </td>
                    <td scope="col" class="text-right"> 6.4</td>
                    <td scope="col" class="text-right">4.64 грн </td>
                    <td scope="col" class="text-right"> 29.70 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-4" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-5" class="accordion-toggle">
                    <td scope="col" class="text-left"> песок </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 400</td>
                    <td scope="col" class="text-right">0.16 грн </td>
                    <td scope="col" class="text-right"> 64.00 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-5" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-6" class="accordion-toggle">
                    <td scope="col" class="text-left"> цемент </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 100</td>
                    <td scope="col" class="text-right">3.34 грн </td>
                    <td scope="col" class="text-right"> 334.00 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-6" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-7" class="accordion-toggle">
                    <td scope="col" class="text-left"> фиброволокно </td>
                    <td scope="col" class="text-right"> кг </td>
                    <td scope="col" class="text-right"> 0.16</td>
                    <td scope="col" class="text-right">264.65 грн </td>
                    <td scope="col" class="text-right"> 42.34 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-7" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-8" class="accordion-toggle">
                    <td scope="col" class="text-left"> пластификатор для бетона </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 0.52</td>
                    <td scope="col" class="text-right">24.00 грн </td>
                    <td scope="col" class="text-right"> 12.48 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-8" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-9" class="accordion-toggle">
                    <td scope="col" class="text-left"> грунтовка глубокопроникающая </td>
                    <td scope="col" class="text-right"> л </td>
                    <td scope="col" class="text-right"> 0.8</td>
                    <td scope="col" class="text-right">22.14 грн </td>
                    <td scope="col" class="text-right"> 17.71 грн </td>
                    <td scope="col" class="text-right"><button type="button" class="btn btn-link">Предложения
                            магазинов</button></td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-9" class="accordian-body collapse">
                            <div id="suppliers" class="accordion">
                                <supplier-materials-cards id="s3" suppliername="Интербудсервис" el="#s3"
                                    items="[object Object]" index="0"></supplier-materials-cards>
                                <supplier-materials-cards id="s4" suppliername="Новая Линия" el="#s4"
                                    items="[object Object]" index="1"></supplier-materials-cards>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-10" class="accordion-toggle">
                    <td scope="col" class="text-left"> линолеум бытовой </td>
                    <td scope="col" class="text-right"> м2 </td>
                    <td scope="col" class="text-right"> 4</td>
                    <td scope="col" class="text-right">99.90 грн </td>
                    <td scope="col" class="text-right"> 399.60 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-10" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr data-toggle="collapse" data-target="#material-row-id2-11" class="accordion-toggle">
                    <td scope="col" class="text-left"> плинтус пластиковый </td>
                    <td scope="col" class="text-right"> мп </td>
                    <td scope="col" class="text-right"> 8</td>
                    <td scope="col" class="text-right">22.75 грн </td>
                    <td scope="col" class="text-right"> 182.02 грн </td>
                    <td scope="col" class="text-right">
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="hiddenRow">
                        <div id="material-row-id2-11" class="accordian-body collapse">
                            <div id="suppliers" class="accordion"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Итого по материалам:</th>
                    <th class="text-right"> 1469.51 грн </th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
)}

export default Materials;
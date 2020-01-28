import React from 'react';

const SummaryQuotationWorkItem = (props) => {
    return (
    <tr>
      <td scope="col" className="test-left"> {name} </td>
      <td scope="col" className="text-right"> { formatPrice(total) }</td>
    </tr>
    )
}
  
const SummaryQuotationWorkGroup = (props) => {
    const getTotal = () => {
        return props.items.reduce((a,b) => a+b['total'], 0)
      }
    return (
        <tbody>
          <tr>
            <th colSpan="2" className="text-left">
              { groupTitle }
            </th>
          </tr>
          <SummaryQuotationWorkItem name={props.name} total={props.total} />
          <tr>
            <th scope="col" className="test-left"> Итого { groupTitle }:  </th>
            <th scope="col" className="text-right">{ formatPrice(getTotal) }</th>
          </tr>
        </tbody>
    )
}
  
const SummaryQuotationTable = (props) => {
    const getTotal =() =>{
        return props.items.reduce((a,b) => a+b.items.reduce((a,b) =>  a+b['total'], 0), 0)  
    }
    return ( <div class="container mb-3">
    <div className="quotation-summary">
    <h4>Итоговая смета.</h4>
      <table className="table table-borderless">
      <thead className="mastercalc-background">
        <tr>
         <th scope="col">Работы</th>
         <th scope="col" className="text-right">Стоимость</th>
        </tr>
        </thead>
          <SummaryQuotationWorkGroup groupTitle={props.groupTitle} items={props.items} />
        <tr>
            <th scope="col" className="test-left"> Итого Работы: </th>
            <th scope="col" className="text-right"> { getTotal } </th>
          </tr>
      </table>
    </div></div>
    )
}
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
  
const SummaryQuotationMaterialsItem = (props) => {
    return (
    <tr>
      <td scope="col" className="test-left"> {name} </td>
      <td scope="col" className="text-right">{ formatPrice(total) }</td>
    </tr>
    )
}
  
 const SummaryMaterialsTable = (props) => {
    
    const getTotal = () => {
        return this.items.reduce((a,b) => a + b['total'], 0)
      }
    return (
    <div>
      <table className="table table-borderless">
      <thead className="mastercalc-background">
        <tr>
         <th scope="col">Материалы</th>
         <th scope="col" class="text-right">Стоимость</th>
        </tr>
        </thead>
        <SummaryQuotationMaterialsItem name={props.name} total={props.total} />
          <tr>
            <th scope="col" className="test-left"> Итого Материалы:  </th>
            <th scope="col" className="text-right">{ formatPrice(getTotal) }</th>
          </tr>
      </table>
    </div>
    )
}
  
const MaterialItems = (props) => {
    return (
      <li classN="table-row">
       <div className="col e-col-1"> <a target="_blank" href="url">{ name }</a></div>
       <div className="col e-col-2">{ unit }</div>
       <div className="col e-col-3">{ qt }</div>
       <div className="col e-col-4">{ formatPrice(price) }</div>
       <div className="col e-col-5">{ formatPrice(total) }</div>
      </li>
    )
}
  
const MaterialsTable = (props) => {
    getQuotationMaterialsTotal=()=>{
        let result = 0
        this.rows.forEach(function(item){
          result += item.total        })
        return result;
      }
    return (
    <div>
    <h4> { title }. Материалы </h4>
      <table class="table table-borderless">
      <thead class="mastercalc-background">
        <tr>
         <th scope="col">Материалы</th>
         <th scope="col" class="text-right">Ед. изм.</th>
         <th scope="col" class="text-right">Необходимое к-во</th>
         <th scope="col" class="text-right">Лучшее предложение</th>
         <th scope="col" class="text-right">К-во</th>
         <th scope="col" class="text-right">Цена (грн)</th>
         <th scope="col" class="text-right">Стоимость (грн)</th>
         <th scope="col" class="text-right">&nbsp;</th>
        </tr>
      </thead>
        
      <tfoot>
      <tr>
      <th colspan="2">Итого по материалам:</th>
      <th class="text-right"> { getQuotationMaterialsTotal() } </th>
      </tr>
      </tfoot>
      </table>
     </div>
    
    
      
    )
  }

 
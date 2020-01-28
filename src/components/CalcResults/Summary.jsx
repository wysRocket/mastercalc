import React from 'react';
import Loading from '../Loading';

const SummaryQuotationTable = (props) => {
  
  const resultArr = {};
const tempResponse = props.response;

const responseKeys = Object.keys(props.response);

responseKeys.forEach((type) => {
    if (tempResponse[type].route) {
        resultArr[type] = [];
        let typeInside = tempResponse[type].route;
        typeInside.forEach(item => {
            const subName = item.name;
            const subPrice = item.cost_items.reduce((acc, curr) => {
                return  acc + curr.total;
            }, 0);
            resultArr[type].push({name: subName, price: subPrice});
        })
    }
})

console.log(resultArr);
  


    const getTotal =(items) =>{
        return items.reduce((a,b) => a+b.items.reduce((a,b) =>  a+b['total'], 0), 0)  
    }
    return ( 
    <div className="container mb-3">
    <div className="quotation-summary">
    <h4>Итоговая смета.</h4>
      <table className="table table-borderless">
      <thead className="mastercalc-background">
        <tr>
         <th scope="col">Работы</th>
         <th scope="col" className="text-right">Стоимость</th>
        </tr>
        </thead>

        {  }

        <SummaryQuotationWorkGroup route={props.response.walls.route} />
        <SummaryQuotationWorkGroup route={props.response.ceiling.route} />
        <SummaryQuotationWorkGroup route={props.response.floor.route} />

        <tr>
            <th scope="col" className="test-left"> Итого Работы: </th>
            <th scope="col" className="text-right"> {  } </th>
          </tr>
      </table>
    </div>
    </div>
    )
}

export default SummaryQuotationTable;

const SummaryQuotationWorkGroup = (props) => {
    
    let renovationElems = props.route.map(el =>
        <SummaryQuotationWorkItem 
        key={el.id} name={el.name} cost_items={el.cost_items}/> )
    
        const getTotal = (items,) => {
        return items.reduce((a,b) => a+b['total'], 0)
      }
      
    return (
        <tbody>
          <tr>
            <th colSpan="2" className="text-left">
            {  }
            </th>
          </tr>
          { renovationElems }
          <tr>
            <th scope="col" className="test-left"> Итого {  }: </th>
            <th scope="col" className="text-right">
            { formatPrice( getTotal(props.route)) } </th>
          </tr>
        </tbody>
    )
}

const SummaryQuotationWorkItem = (props) => {
    
    const getTotal = (items) => {
        return items.reduce((a,b) => a+b['total'], 0)
      }
    return (
    <tr>
        <td scope="col" className="test-left"> {props.name} </td>
        <td scope="col" className="text-right">
        { formatPrice (getTotal(props.cost_items)) }</td>
    </tr>
    )
}

const formatPrice = (val) =>{
    return (val/100).toFixed(2) + ' грн';
}


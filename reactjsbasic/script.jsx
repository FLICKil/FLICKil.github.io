//chia component khi qua lon
//hoac su dung nhieu lan
//hoac co trang thai, logic rieng

// class Product extends React.Component {
//   //this.props => obj
//   //this.props.(props name)

//   render() {
//     return (
//       <div className="product-item">
//         <div className="product-thumbnail">
//           <img src={this.props.img} alt={this.props.name} />
//         </div>
//         <div className="product-detail">
//           <div className="product-name">
//             <h2>{this.props.name}</h2>
//           </div>
//           <div className="product-price">{this.props.price}</div>
//         </div>
//       </div>
//     );
//   }
// }

// function Card(props) {
//     //props.(propertyName)
//   return (
//     <div className="card-item">
//       <div className="card-header">Card header</div>
//       <div className="card-body">Card body</div>
//       <div className="card-footer">Card footer</div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <Product
//         img="https://cf.shopee.vn/file/b568e7835f5a7c8e44335d6a896c5662_tn"
//         name="Giày fake loại 1"
//         price="100.000"
//       />
//       <Product
//         img="https://cf.shopee.vn/file/d45d24e2aae63b47aab9799b4058bacb_tn"
//         name="Thắt lưng"
//         price="7.900"
//       />
//       <Product />
//       <Product />

//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }

function Input(props) {
  return (
    <div className="input-area">
      <div className="label">{props.label}</div>
      <div className="input">
        <div className="icon">{props.icon}</div>
        <input type={props.type} name={props.name} id={props.name} />
      </div>
    </div>
  );
}

function Quanlity(props) {
  return (
    <div className="select-area">
      <div className="label">{props.label}</div>
      <select className="select" id={props.id}>
        <option value="" selected disabled hidden>
          choose...
        </option>
        <option value="30%">30% - Outstanding</option>;
        <option value="20%">20% - Good</option>;
        <option value="15%">15% - It's OK</option>;
        <option value="10%">10% - Bad</option>;
        <option value="5%">5% - Terrible</option>;
      </select>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <div className="seperate"></div>
      <Input
        label="Bill Amount"
        name="amount"
        type="text"
        icon={<i class="fa-regular fa-money-bill-1"></i>}
      />
      <Input
        label="Number of guests"
        name="guest"
        type="number"
        icon={<i class="fa-solid fa-user-group"></i>}
      />
      <Quanlity label="Service Quanlity" id="quanlity" />
      <div className="seperate"></div>
      <div id="result"></div>
      <button>Calculate</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

function tipsCalc() {
    let bill = $("#amount").val();
    let guests = $("#guest").val();
    let service = $("#quanlity").val();
    let result = "";
    if (bill == null || guests == null || service == null) {
      result = "Please fill in all info";
      return result;    
    }
    if (!Number.isFinite(+bill) || !Number.isFinite(+guests) || guests == 0) {
      result = "Please input the correct value";
      return result;
    }
    let tip = +bill * +(service.slice(0,-1)) / +guests /100;
    return `Tip <b>$${tip}</b> each person`
  }
  
  $(".container button").click(function(){
      $("#result").html(tipsCalc())
  })
import React from 'react'
import ReactDOM from 'react-dom'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));

//  注意元件開頭第一個字母都要大寫
// class MyComponent extends React.Component {
// // render 是 Class based 元件唯一必須的方法（method）
//   render () {
//     return (
//     <div>Hello, World!</div>
//   )
//   }
// }

// // 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
// ReactDOM.render(<MyComponent />, document.getElementById('app'))

// // 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side
// // effect）
// const MyComponent = () => (
// 	<div>Hello, World!</div>
// );

// // 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
// ReactDOM.render(<MyComponent/>, document.getElementById('app'));

// //  注意元件開頭第一個字母都要大寫
// class MyComponent extends React.Component {
// 				// render 是 Class based 元件唯一必須的方法（method）
// 				render() {
// 								return (
// 												<div>Hello, World!</div>
// 								);
// 				}
// }

// // PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
// MyComponent.propTypes = {
// 				todo: React.PropTypes.object,
// 				name: React.PropTypes.string
// }

// // Prop 預設值，若對應 props 沒傳入值將會使用 default 值
// MyComponent.defaultProps = {
// 				todo: {},
// 				name: ''
// }

const imgUrl = '';
const divStyle = {
  color: 'red',
  backgroundImage: 'url(' + imgUrl + ')'
};

ReactDOM.render(
	<div style={divStyle}>Hello World!</div>, document.getElementById('app'));
				
// const 為常數
const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
	render() {
		return (
			<ul>
				{lists.map((result, index) => {
					return (
						<li key={index}>{result}</li>
					);
				})}
			</ul>
		)
	}
}

ReactDOM.render(<HelloMessage/>, document.getElementById('list'));

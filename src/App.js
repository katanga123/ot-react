import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  componentDidMount() {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjRmZjFkZjYwNGRjNjgzMzZlMjYyY2Y1MmQxNmI3MzEwYWU1NjQ3NTVmNDdkYjgxNTUzYjlkYWFjOGVmOTFlNDVkMDlhMGZkYzFmN2U0NjAiLCJpYXQiOjE1ODcxMTMzODUsIm5iZiI6MTU4NzExMzM4NSwiZXhwIjoxNjE4NjQ5Mzg1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.at7BWsQVlUvgCu8UBPG-RIXTG529a3ajegkDzX6wKfaOsB0DsGZCEvUhCaI5x2gNNmrNvM00tJLjk7mU0xywVuqrhC-JiHnPhYaHLFwnvAAKOKlsYX8LIUEb-eRALfirHCK3ivTdwdn-9U9kUxxZ7wLiFe0yYHlGB-72hKEsIf9n3dhNynDrBVyUc0IaUYkty6NRDXgWEllm8FFYVKPZlor9xRv9tiXyFjJXl5wD2OSz-mAbIH-ba9nQ5t1CuXQMA7qridp7gC-rWFVVOPleFQpoAAe2TbE21_VHITCPqLL7-Sl89BJSnKYkVN1AcPzN51BosqhVStKEqy4RCYxADHI-6q3fRt-CjE2fdgSZnS_fDf5S832pVPhAjcOp_WcStHropbUbiBPWfhaUA1kuqjbh8A4AavtgUhnvOoRJwxh78TVUBBDzxDCNaV66hSQmoj0Bm63yIGJpk4A2rZ4_xbBdKqTt1OoNo601LglMq-jIJ_CkIb2hSD7kwJI6r4ZOXJkIaeVY-4jDTwU-4R98-LRxfo2q4qdQSgQf_N0jlLreroZ3E0Rn3sguI-jCVzD3KckNgcEWYNQRcHGVxcNItaZTf2DA6zkQm0HVJ6fn_xnuRa64hwfd12_JalBT6-FxaqV3XL_I_ttIxJr4DG4WeFo9OIta2lxxhbm7gzNn8yo'

    axios.get(
      'http://localhost:8000/api/v1/subject/1',
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(console.error())
  }


  render() {
    return (
      <div className="app-container">
        <input type="email" className="ot-input-regular" placeholder="Email" />
        <input type="password" className="ot-input-regular" placeholder="Password" />
        <button className="ot-btn ot-btn-regular">Sign In</button>
      </div>
    )
  }
}

export default App;

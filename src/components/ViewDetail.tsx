import React from 'react'
import {Books} from './Book'
interface Prop{
    books:Books[]
}

const ViewDetail = ({{books}:Prop}) => {
  return (
    <div className='view-container'>
      <table>
        <thead>
            <tr>
                <td>title</td>
                <td>author</td>
                <td>price</td>
            </tr>
        </thead>
        <tbody>
            {books.map((item:{title:string,author:string,price:string}
            <tr>
                <td></td>
                <td></td>
                <td></td>

            </tr>
           ))}
        </tbody>
      </table>

    </div>
  )
}

export default ViewDetail

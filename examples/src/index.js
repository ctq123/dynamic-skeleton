import React from 'react'
import { render } from 'react-dom'
import { Skeleton } from '../../src'
import { Switch, Button, Descriptions } from 'antd'
import './index.css'
import styles from './index.less'

const titleList1 = [
  { itemId: 1, name: 'item1' },
  { itemId: 2, name: 'item2' },
  { itemId: 3, name: 'item3' },
  { itemId: 4, name: 'item4' }
]

const titleList2 = [
  { itemId: 1, name: 'item1' },
  { itemId: 2, name: 'item2' },
  { itemId: 3, name: 'item3' },
  { itemId: 4, name: 'item4' },
  { itemId: 6, name: 'item6' },
  { itemId: 7, name: 'item7' },
  { itemId: 8, name: 'item8' },
  { itemId: 9, name: 'item9' },
  { itemId: 18, name: 'item18' },
  { itemId: 19, name: 'item19' }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    const titleList = titleList2
    this.state = {
      titleList
    }
  }

  handleClickTitle(node) {
    console.log('node>>>', node)
    // const { titleList } = this.state
    // let arr = []
    // if (titleList && titleList.length > 5) {
    //   arr = titleList1
    // } else {
    //   arr = titleList2
    // }
    // this.setState({
    //   titleList: arr
    // })
  }

  render() {
    const { titleList } = this.state
    const generateBodyItem = titleList.map((item, index) => {
      if (item) {
        return (
          <div key={index} data-item-id={item.itemId} className={(item.itemId > 5 && item.itemId < 10) ? 'my-body-item my-body-item2' : 'my-body-item'}>{item.name}</div>
        )
      }
    })
    return (
      <div style={{ width: 500, height: 400, marginTop: 50, marginLeft: 200 }}>
        <Skeleton imgClassName="my-body-item">
          {generateBodyItem}
        </Skeleton>

        <hr></hr>
        <Skeleton>
          <div className={styles['flex']}>
            <img src="https://cdn.poizon.com/node-common/2f81052032f5ba63b0995abb6842599b.png" />
            <div>啦啦啦</div>
            <div>fdafdsafdasfsa</div>
          </div>
          <Switch />
          <Button type="primary" size="small">test</Button>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Skeleton>
        <br />
        <Switch />
        <Button type="primary" size="small">test</Button>
        <br />
        <div className={styles['flex']}>
            <img src="https://cdn.poizon.com/node-common/2f81052032f5ba63b0995abb6842599b.png" />
            <div>啦啦啦</div>
            <div className={styles['color-red']}>fdafdsafdasfsa</div>
          </div>

          <br />


          <hr/>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))

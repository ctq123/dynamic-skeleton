import React, { PureComponent } from 'react'
import styles from './rcSkeleton.less'

export class Skeleton extends PureComponent {

  state = {
    textTags: ['div', 'p', 'span', 'ul', 'li'],
    imgTags: ['img']
  }

  recursionChildType(root, arr, i=0) {
    if (i >= arr.length) return root
  }

  generateSkeleton() {
    const { children, level=1, animation, imgClassName='' } = this.props
    const animationClassName = animation ? styles['skeleton-animation'] : ''
    if (!children || children.length === 0) {
      return children
    }
    return children.map((item, i) => {
      if (item.type === 'img' || (imgClassName && item.props.className === imgClassName)) {
        return <div key={i} className={`${styles['circle']} ${animationClassName}`} />
      } else {
        return <div key={i} className={`${styles['paragraph']} ${animationClassName}`} />
      }
    })
  }

  generateChildren(children) {
    if (Array.isArray(children)) {
      return children.map((item, i) => {
        if (Array.isArray(item.prop.children)) {
          // return children
        }
      })
    }
    return children
  }

  render() {
    const { children } = this.props
    console.log("children", children)
    return (
      <div className={styles['rc-skeleton']}>
        { this.generateSkeleton() }
      </div>
    )
  }
}

export default Skeleton
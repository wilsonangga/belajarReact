import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YoutubeComp from '../../component/YoutubeComponent/YoutubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'

class Home extends React.Component{
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Judul Satu"
                    desc="Lorem ipsum dolor sit amet."/>
                <YoutubeComp 
                    time="8.12" 
                    title="Judul Dua"
                    desc="Lorem ipsum dolor sit amet."/>
                <YoutubeComp 
                    time="9.12" 
                    title="Judul Tiga"
                    desc="Lorem ipsum dolor sit amet."/>
                <YoutubeComp 
                    time="6.12" 
                    title="Judul Empat"
                    desc="Lorem ipsum dolor sit amet."/>
                <YoutubeComp/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent ? <LifeCycleComp/> : null
                } */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}

export default Home;
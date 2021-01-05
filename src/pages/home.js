import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                'https://r2qn.flgwx.com/fund/banner/SJF9MY6DrjLDDU4WYibQ1LunKMvMS3TA3dn1YLZp.png',
                'https://r2qn.flgwx.com/fund/banner/buhne31KaxyhrXMxojsP07Uhbj9uzDsVn6eykO8C.png',
                'https://r2qn.flgwx.com/fund/banner/SJF9MY6DrjLDDU4WYibQ1LunKMvMS3TA3dn1YLZp.png'
            ],
            imgHeight: 176
        }
    }
    // componentDidMount() {
    //     // simulate img loading
    //     setTimeout(() => {
    //         this.setState({
    //             data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //         });
    //     }, 100);
    // }

    render() {
        return (
            <WingBlank>
                <Carousel
                    // autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Home;

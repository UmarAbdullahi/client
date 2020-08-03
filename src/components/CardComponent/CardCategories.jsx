import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardComponentsCategories from './CardComponentsCategories';
function CardCategories() {
    return (
        <div style={{ padding: '50px 0 100px 0', backgroundColor: '#ebebeb' }}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
                <strong>The most popular service 2020</strong>
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                <CardComponentsCategories
                    image="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/KJMaqOmCNiMe4USlckLcUlJzPKfQhEt8Z8WqWMhv.png"
                    title="Membuat web Dengan React"
                    name="LeviAckerman"
                    avatar="https://i.pinimg.com/originals/97/54/f6/9754f6c22aeade64c3e77cf1c9406567.jpg"
                />
                <CardComponentsCategories
                    image="https://cliffex.com/blog/wp-content/uploads/2020/01/AngularJS.jpg"
                    title="Fix Bug Angular"
                    name="Ainzoalgown"
                    avatar="https://pm1.narvii.com/6986/13b47a498b853a45da645c041a25442d799ac390r1-1366-768v2_uhq.jpg"
                />
                <CardComponentsCategories
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--ZmPcIbAW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dzone.com/storage/temp/12334613-971.jpg"
                    title="Membuat Website Portofolio "
                    name="Ayanokouji"
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiO3mwSUzKj8O7f9p9VS6go88Pxo3Ch_tl6g&usqp=CAU"
                />
                <CardComponentsCategories
                    image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118270585/original/759fd246e2b2a2790fc27533b8d1f9fa80e75c74/fix-bugs-or-issues-in-ios-app.jpeg"
                    title="Fix Bug Wordpress"
                    name="Saitamasensei"
                    avatar="data:image/jpeg;base64,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"
                />
            </div>
        </div>
    );
}

export default CardCategories;

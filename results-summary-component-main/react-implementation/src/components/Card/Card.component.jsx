import { Circle } from '../Circle/Circle.component';
import styles from './Card.module.css';
import { Item } from '../Item/Item.component';
import { Button } from '../Button/Button.component';
import data from './data.json';

import imageItem1 from '../../assets/images/icon-reaction.svg'
import imageItem2 from '../../assets/images/icon-memory.svg'
import imageItem3 from '../../assets/images/icon-verbal.svg'
import imageItem4 from '../../assets/images/icon-visual.svg'


export const Card = (props) => {
    const images = [imageItem1, imageItem2, imageItem3, imageItem4];
    const imageStyles = [props.styles.itemOne, props.styles.itemTwo, props.styles.itemThree, props.styles.itemFour];

    return (
        <div className={styles.card}>
            <div className={styles.cardPresentation}>
                <p className={styles.cardTitle}>Your Result</p>
                <Circle current={76} total={100}/>
                <div className={styles.cardHeading}>
                    Great
                </div>
                <div className={styles.cardDescription}>
                    You scored higher than 65% of the people who have taken these tests.
                </div>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardContentSummary}>Summary</p>

                {
                    data.map((d, index) => {
                        console.log(d);
                        return <Item title={d.category} image={images[index]} current={d.score} max='100' itemNumber={imageStyles[index]} />
                    })
                }

                <Button title={'Continue'} onClickHandler={() => console.log('clicked')} />
            </div>
        </div>
    )
}
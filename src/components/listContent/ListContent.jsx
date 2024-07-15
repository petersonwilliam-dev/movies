import { standardizeCardContent } from '../../API/standardizeContent'
import CardContent from '../cardContent/CardContent'
import './ListContent.css'

function ListContent(props) {
    return (
        <div className='listContent mb-5'>
            <div className="title">
                <h3 className="display-5">{props.title}</h3>
                <hr />
            </div>
            <div className="contents d-flex flex-wrap justify-content-center">
                {props.contents.map(content => (
                    <CardContent key={content.id} content={standardizeCardContent(content)}/>
                ))}
            </div>
        </div>
    )
}

export default ListContent
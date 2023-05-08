import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import apiDeputados from '@/services/apideputados'
import Pagina from '@/component/Pagina'


const index = ({ deputados }) => {


    return (
        <Pagina titulo='Deputados'>
            
            <Row>
                {deputados.map(item => (
                    <Col  className='mb-3  ml-3' md={3} title={item.foto}>

                        <Link href={'/deputados/' + item.id}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.urlFoto} />

                            </Card>

                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {
    const Rdeputados = await apiDeputados.get("/deputados")
    const deputados = Rdeputados.data.dados

    return {
        props: { deputados},
    }
}
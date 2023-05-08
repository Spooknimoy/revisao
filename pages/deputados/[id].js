import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import apiDeputados from '@/services/apideputados'
import Pagina from '@/component/Pagina'
import Link from 'next/link'

const Detalhes = ({ deputados, Rdespesas, Rprofissoes}) => {
  return (
    <Pagina titulo={deputados.nomeCivil}>
      <Row >
        <Col md={4}>
          <Card>
            <Card.Img src={deputados.ultimoStatus.urlFoto} />
            <Card.Body>
              <Card.Title>{deputados.ultimoStatus.nomeCivil}</Card.Title>
              <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
              <p>UF: {deputados.ultimoStatus.siglaUf}</p>
            </Card.Body>
          </Card>
          <Link href='/deputados'>
            <Button className='mt-2' variant="outline-danger">Danger</Button>
          </Link>
        </Col>

        <Col md={6}>
          <Table striped>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {Rdespesas.map(item => (
                <tr>
                  <td>{item.dataDocumento}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>R${item.valorDocumento}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={2}>
          <h2>Profissões</h2>
          <ul>
            {Rprofissoes.map(item => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </Col>

      </Row>
    </Pagina>
  )
}

export default Detalhes

export async function getServerSideProps(context) {
  const id = context.params.id

  const resultado = await apiDeputados.get("/deputados/" + id)
  const deputados = resultado.data.dados

  const despesas = await apiDeputados.get("/deputados/" + id + "/despesas")
  const Rdespesas = despesas.data.dados

  const profissoes = await apiDeputados.get("/deputados/" + id + "/profissoes")
  const Rprofissoes = profissoes.data.dados

  return {
    props: {deputados, Rdespesas, Rprofissoes
    },
  }
}

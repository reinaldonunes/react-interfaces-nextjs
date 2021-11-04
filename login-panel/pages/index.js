import Head from 'next/head'
import Main from '../components/Main'
import Panel from '../components/Panel'
import Box from '../components/Box'
import Form from '../components/Form'
import Link from '../components/Link'
import Imagem from '../components/Imagem'

export default function Home() {
  return (
    <>
      <Head>
        <title>:: Coder - Login Panel ::</title>
        <meta name="description" content="Login panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
          <Panel>
            <Box estilo="box45">
                <Imagem src="/logoCoder.png" width={250}/>
                <span className="txtCenter">Bem-vindo ao seu painel de controle. Preencha os dados para acessar suas configurações.</span>
                <span className="poweredBy">Powered by Coder.Inc&reg;</span>
            </Box>

            <Box estilo="box55">
              <Form />
              <Link url="javacript:;" text="Esqueci minha senha" />
            </Box>
          </Panel>
      </Main>
  </>
  )
}

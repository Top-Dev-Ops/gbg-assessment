import { NextPage } from 'next'
import Layout from '../components/Layout'
import { Parent as ClassParent } from '../components/Scenario1/ClassComponent'
import { Parent as FunctionParent } from '../components/Scenario1/FunctionComponent'

const Scenario1: NextPage = () => (
  <Layout title="Scenario 1">
    <ClassParent />
    <FunctionParent />
  </Layout>
)

export default Scenario1

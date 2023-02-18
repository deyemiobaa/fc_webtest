import { request, gql } from 'graphql-request';

const endpoint = "https://spacex-production.up.railway.app/";

export const getCompanyData = async (): Promise<{ name: string, ceo: string, cto: string }> => {
  const query = gql`
    query {
      company {
        name
        ceo
        cto
      }
    }
  `;
  try {
    const data = await request(endpoint, query);
    const { name, ceo, cto } = data.company;
    return { name, ceo, cto };
  } catch (error) {
    return { name: '', ceo: '', cto: '' };
  }
};
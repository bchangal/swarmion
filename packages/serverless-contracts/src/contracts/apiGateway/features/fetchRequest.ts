/// <reference lib="dom" />

import { ApiGatewayContract } from '../apiGatewayContract';
import { OutputType, RequestArguments } from '../types';
import { getRequestParameters } from './requestParameters';

export const getFetchRequest = async <Contract extends ApiGatewayContract>(
  contract: Contract,
  fetchFunction: typeof fetch,
  options: RequestArguments<Contract> & { baseUrl?: URL | string },
): Promise<OutputType<Contract>> => {
  const { path, method, queryStringParameters, body, headers } =
    getRequestParameters<Contract>(contract, options);

  const url = new URL(path, options.baseUrl);

  url.search = new URLSearchParams(queryStringParameters).toString();

  const response = await fetchFunction(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  return response.json() as Promise<OutputType<Contract>>;
};

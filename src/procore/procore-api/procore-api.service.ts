import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProcoreApiService {
  constructor(private readonly httpService: HttpService) {}

  async getProjects(companyId, config: { token }): Promise<any> {
    try {
      const response = await this.httpService
        .get('/rest/v1.0/projects', {
          headers: {
            Authorization: `Bearer ${config.token}`,
          },
          params: {
            company_id: companyId,
          },
        })
        .toPromise();

      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

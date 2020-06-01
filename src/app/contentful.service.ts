import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() {}

  //log content
  logContent(contentId) {
    this.client.getEntry(contentId).then((entry) => console.log(entry));
  }

  //get content
  getContent(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'lesson',
          },
          query
        )
      )
      .then((res) => res.items);
  }
}

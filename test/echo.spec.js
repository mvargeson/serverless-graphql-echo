/* global describe, it */
import { expect } from 'chai';
import handler from '../functions/graphql/handler';

describe('Echo Query', () => {
  it('should get a message', (done) => {
    const event = {
      body: {
        query: `
        {
          message: echo(message: "testing")
        }
        `,
      },
    };

    handler(event, null, (error, response) => {
      if (error) return done(error);
      if (response.errors) return done(response.errors);

      try {
        const message = response.data.message;
        expect(message).to.equal('testing');
        return done();
      } catch (exception) {
        return done(exception);
      }
    });
  });
});

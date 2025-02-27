import React from 'react';

import WorkList from '../components/WorkList';
import Seo from '../components/Seo';
import config from '../config';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allContentfulWork;

    return (
      <div>
        <Seo
          title="Home"
          description="We are web development company"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList
                introVisible={true}
                workList={work}
                buttonVisible={true}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query HomeQuery {
    allContentfulWork(sort: { fields: [order] }, limit: 11) {
      edges {
        node {
          id
          title
          slug
          image {
            title
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes
            }
          }
          description {
            description
          }
          url
        }
      }
    }
  }
`;

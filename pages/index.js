import { Page, Card, ResourceList, ResourceItem, TextStyle,  AppProvider } from '@shopify/polaris';
import { EditMinor, DeleteMinor } from '@shopify/polaris-icons';
import DropZone from '../components/_dropzone.js';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <AppProvider>
    <Page
      title="Facebook Pixel Tracking"
      primaryAction={{ content: 'Add New', disabled: false }}
      secondaryActions={[
        { content: 'View on your store', url: '#' },
      ]}
    >
      <Card sectioned>
        <ResourceList
          resourceName={{ singular: 'customer', plural: 'customers' }}
          items={[
            {
              id: 341,
              url: 'customers/341',
              pixelID: '234234234234',
              collection: 'All',
            },
            {
              id: 256,
              url: 'customers/256',
              pixelID: '23412342134234',
              collection: 'All',
            },
          ]}
          renderItem={(item) => {
            const { id, url, pixelID, collection } = item;

            return (
              <ResourceItem
                url={url}
                accessibilityLabel={`View details for ${pixelID}`}
              >
                <h3>
                  <TextStyle variation="strong">
                  Pixel ID: {pixelID}
                  </TextStyle>
                </h3>
                <div>Collection: {collection}</div>
              </ResourceItem>
            );
          }}
        />
      </Card>
     
      <Card sectioned>
      <DropZone />
      </Card>
    </Page>
  </AppProvider>
);

export default Index;
import { Page, Card, DataTable, Link, Icon } from '@shopify/polaris';
import {EditMinor, DeleteMinor} from '@shopify/polaris-icons';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const rows = [
  [    
    'All',
    56513861435136,
    <Link url="#"><Icon source={EditMinor} /></Link>,
    <Link url="#"><Icon source={DeleteMinor} /></Link>,
  ],
];

const Index = () => (
  <Page title="Server-side Facebook Pixel Tracking">

    <Card>
      <DataTable
        columnContentTypes={[
          'text',
          'numeric',
          'text',
          'text',
        ]}
        headings={[
          'Collection Name',
          'Pixel',
          '',
          '',
        ]}
        rows={rows}
      />
    </Card>
  </Page>
);

export default Index;
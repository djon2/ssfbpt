import React from 'react';
import { Page, Card, DataTable } from "@shopify/polaris";

class PixelTable extends React.Component {
    render() {
        const rows = [
             [
                '56513861435136215',
                'All',
                'Edit',
                'Delete',
            ],
        ];

        return (
            <Page title="Server-side Facebook Pixel Tracking">
                <Card>
                    <DataTable
                        columnContentTypes={[
                            'text',
                            'text',
                            'text',
                            'text',
                        ]}
                        headings={[
                            'Pixel',
                            'Collection Name',
                            'Operations',
                            '',
                        ]}
                        rows={rows}
                    />
                </Card>
            </Page>
        ); 
    }
}

export default PixelTable;

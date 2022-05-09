import { Col, Layout, Row } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CollectionCard } from '../../components/CollectionCard';
import { useCollections } from '../../hooks/useCollections';
import { Connection, PublicKey, ValidatorInfo } from '@solana/web3.js';

import { useConnection } from '@oyster/common';

export const CollectionsView = () => {
  const { liveCollections } = useCollections();
  const connection = useConnection();

  useEffect(() => {
    const loadStores = async (connection: Connection) => {
      try {
        const pubk = new PublicKey(
          '9QU2QSxhb24FUX3Tu2FpczXjpK3VYrvRudywSZaM29mF',
        );

        const info = await connection.getAccountInfo(pubk);
        console.log(info);
        if (info) {
          const vInfo = ValidatorInfo.fromConfigData(info.data);
          console.log(vInfo);
        }
      } catch (error) {
        console.log('error 2' + error);
      }
    };
    loadStores(connection);
  }, []);

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <span className={'collections-title'}>Collections</span>
      <Row className={'collections-layout-container'} gutter={32}>
        {liveCollections.map(collection => {
          const pubkey = collection.pubkey;
          return (
            <Col
              key={pubkey}
              xs={24}
              sm={24}
              md={24}
              lg={12}
              className={'col-container'}
            >
              <Link key={pubkey} to={`/collection/${collection.mint}`}>
                <CollectionCard pubkey={pubkey} key={pubkey} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

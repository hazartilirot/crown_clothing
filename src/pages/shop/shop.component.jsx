import React, {Component} from "react";
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionsOverview from "../../components/collection-overview/collection-overview.component"

import CollectionPage from '../collection/collection.component'

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action'
import {connect} from 'react-redux'

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
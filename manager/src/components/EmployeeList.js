import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  render() {
    return (
      <View>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
      </View>
    );
  }
}

export default EmployeeList;

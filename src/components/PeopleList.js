import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

export default class PeopleList extends Component {
    keyExtractor = item => item.email;

    renderItem = ({ item }) => {
        const { name, picture, cell, email } = item;

        return (
            <View>
                <View style={styles.cardContainerStyle}>
                    <View style={{ paddingRight: 5 }}>
                        <Text style={styles.cardTextStyle}>
                            {name.first} {name.last} {'\n'}
                            {cell} {'\n'}
                            {email}
                        </Text>
                    </View>
                    <Image
                        style={styles.faceImageStyle}
                        source={{ uri: picture.medium }}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={this.props.people}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        );
    }
}

PeopleList.propTypes = {
    people: PropTypes.array
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#093339'
    },
    cardContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#4e8087',
        padding: 10
    },
    faceImageStyle: {
        width: 65,
        height: 65
    },
    cardTextStyle: {
        color: 'white',
        textAlign: 'left'
    }
});

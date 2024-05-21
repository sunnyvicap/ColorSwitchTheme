import React, { useState } from "react";
import { SkeletonCardLoader } from "../../component/skeletonLoader"
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { LOREM_POST } from "../../util/data";
import { Card, Text } from "react-native-paper";

const LatestPostSkeleton = () => {
    return (
        <ScrollView
            style={{
                padding: 10
            }}>
            <SkeletonCardLoader />
            <View style={{
                height: 10
            }} />
            <SkeletonCardLoader />
            <View style={{
                height: 10
            }} />
            <SkeletonCardLoader />
        </ScrollView>
    )
}

const LatestPostCard = (item: { id?: number; title: any; description?: string; url?: string; }) => {
    return (
        <Card style={{
            padding: 10,
            borderRadius: 10,
            marginVertical: 8,
            marginHorizontal: 8
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily :'OpenSans-Regular'
            }}>{item.title}</Text>
            <Text style={{
                fontSize: 12,
                fontWeight: '300',
                marginTop: 5,
                fontFamily :'OpenSans-Regular'
            }}>{item.description}</Text>
            <Image
                height={200}
                style={{
                    borderRadius: 10,
                    marginTop: 10
                }}
                source={{
                    uri: item.url,
                }} />
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default function Latest() {

    const [isLoading, seIsLoading] = useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            seIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return isLoading ? (
        <LatestPostSkeleton /> ) : (

        // <LatestPostSkeleton />
        <View style={styles.container}>
            <FlatList
                data={LOREM_POST.posts}
                renderItem={({ item }) => LatestPostCard(item)}
            />
        </View>
    )

}
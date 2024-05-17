import { View } from "react-native"
import { Card } from "react-native-paper"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"



export const SkeletonCardLoader = () => {
    return (
        <Card style ={{
            padding: 10,
            borderRadius : 5,
            backgroundColor: "#ffffff"
        }}>
            <SkeletonPlaceholder borderRadius={4} highlightColor="#EEEEEE">
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
                    <SkeletonPlaceholder.Item marginLeft={20}>
                        <SkeletonPlaceholder.Item width={120} height={20} />
                        <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <View style= {{height: 10}}></View>
            <SkeletonPlaceholder borderRadius={4} highlightColor="#EEEEEE" >
                <SkeletonPlaceholder.Item flexDirection="column" height={200}>
                    <SkeletonPlaceholder.Item  height={200} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </Card>
    )
}
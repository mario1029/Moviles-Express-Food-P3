import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, SectionList, Image, Alert } from 'react-native';
import {Card } from 'react-native-elements'

const Premisess= ({navigation}:any)=>{

    const data= [
    {
        titulo:'lobo 1',
        image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
        aprobado:true,
    },
    {
        titulo:'lobo 2',
        image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
        aprobado:true,
    },
    {
        titulo:'lobo 3',
        image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
        aprobado:true,
    },
    {
        titulo:'lobo 3',
        image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
        aprobado:true,
    },  
    ];

    const data2=[
        {
            titulo:'lobo 3',
            image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
            aprobado:false,
        },
         {
            titulo:'lobo 3',
            image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1',
            aprobado:false,
        },
        {
            titulo:'lobo 3',
            image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1', 
            aprobado:false,
        }, {
            titulo:'lobo 3',
            image:'https://th.bing.com/th/id/OIP.pD9m7CfeyptsBmHPkpbq9AHaD2?pid=ImgDet&rs=1', 
            aprobado:false,
        },
    ]

    const onLongPress= (/* id:number */)=>{
        Alert.alert(
          "Options",
          "Que desea realizar",
          [
            {
              text: "cancel",
              onPress: () => console.log("Ask me later pressed"),
              style: "cancel"
            },
            {
                text: "Editar",
                onPress: () =>navigation.navigate('editPremisess') //deleteT(id)
            },
            {
              text: "Borrar",
              onPress: () =>console.log('borrado') //deleteT(id)
            }]
        );}

    const Item = ( {title, image, aprobado, id, onRefresh}:any ) => (
        <Pressable
        onPress={()=>
            {   if(aprobado) 
                    navigation.navigate('Products')
            }}
        onLongPress={()=>onLongPress()}
        >
           <View>
              <Card>
              <Image
            style={{ width: "100%", height: 125 }}
            resizeMode="cover"
            source={{ uri: image }}
          />
                <Card.Divider/>
                <Card.Title>{title}</Card.Title>
                <Card.Divider/>
              </Card>
          </View>  
        </Pressable>
        );
      
        const renderItem = ({item}:any ) => (
          <Item title={item.titulo} image={item.image} aprobado={item.aprobado}/>    
        );
    
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}> Mis Establecimientos</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                //style={styles.input}
                //onChangeText={setText}
                //value={text}
                placeholder={"Direccion"}
                //onSubmitEditing={ ()=>search(text)}
                />
            </View>
            <View style={styles.list}>
            <SectionList
            sections={[
                {title: 'Aprobados', data: data },
                {title: 'En espera', data: data2},
              ]}
              renderItem={renderItem}
              renderSectionHeader={({ section: { title , data} }) => (
                  (data.length>0)? <Text style={styles.listHeaderText} >{title}</Text> : null
              )}
            keyExtractor={(item, index) => index.toString()}
            />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
    },
    containerTitle: {
        padding: 10,
        //backgroundColor: "#AD20A5"
    },
    list: {
      width: '100%',
      flex:2
    },
    listHeaderText: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        color: 'black',
        fontSize:20
    },
    text:{
      color: 'black',
      fontSize: 15
    },
    input: {
      width:'80%',
      height: 40,
      margin: 20,
      borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 10,
      //borderColor: "#20232a",
    },
    title: {
        color:'black',
        marginTop: 60,
        paddingVertical: 8,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      image:{
        width: "100%",
        height: 125,
      }
  });
  

export default Premisess;
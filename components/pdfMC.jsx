import { PDFDownloadLink, Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useUser } from "../context/Context.js"
import { useState, useRef, useEffect } from 'react'
import Button from './Button'
Font.register({ family: "Inter", src: "/assets/font.otf" })

const styles = StyleSheet.create({
    body: {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        fontSize: "8px",
        fontWeight: "100",
    },
    subtitle: {
        width: "100%",
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
        padding: "1px 100px",
        margin: "16px 0",

    },


    containerIntroItems: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#38569c",
    },
    introImg: {
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"



    },
    logo: {
        position: "absolute",
        height: "auto",
        width: "150px",
        marginLeft: "35px",
    },
    introItems: {
        width: "100%",
    },
    items: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    introViewKeyValue: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    viewKeyValue: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    key: {
        margin: "0px",
        width: "50%",
        padding: "2px 5px 0px 5px ",
        border: "1px solid #294B98",
        backgroundColor: "#294B98",
        color: "#f2f2f2",
        fontSize: "8px",
        fontWeight: "100"

    },
    value: {
        width: "50%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid #294B98",
        color: "#000000",
        fontSize: "8px",
        fontWeight: "100"
    },
    valueTwo: {
        width: "100%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid #294B98",
        color: "#000000",
        fontSize: "8px",
        fontWeight: "100"

    },
    noValue: {
        width: "50%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid #294B98",
        color: "#ffffff",
        fontSize: "8px",
        fontWeight: "100",
        backgroundColor: "#294B98",

    },
    valueYellow: {
        width: "25%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid orange",
        color: "orange",
        fontSize: "8px",
        fontWeight: "100"

    },

    valueElaborador: {
        width: "33%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        color: "#000000",
        fontSize: "8px",
        fontWeight: "100",
        textAlign: "right",
        backgroundColor: "transparent",
    },
    valueElaboradorLine: {
        width: "34%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        borderTop: "1px solid #294B98",
        color: "#000000",
        fontSize: "8px",
        fontWeight: "100",
        textAlign: "center",
        backgroundColor: "transparent",
    },
    noValueYellow: {
        width: "25%",
        height: "12px",
        padding: "2px 5px 0px 5px ",
        border: "0.5px solid orange",
        color: "#ffffff",
        fontSize: "8px",
        fontWeight: "100",
        backgroundColor: "orange",

    },
    viewKeyValueTwo: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    viewKeyValueTwoYellow: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "16px 0 0 0",
    },

    viewKeyValueElaborado: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "30px 0 0 0",
    },



})






const PDFView = ({ click }) => {
    const { pdfData } = useUser()

    const [isCliente, setisCliente] = useState(false);


    useEffect(() => {
        setisCliente(true)
    }, []);

    console.log(pdfData)

    return (
        <div>
            {isCliente && <PDFDownloadLink document={
                <Document>
                    <Page style={styles.body} size="A4" fixed >
                        <Text style={styles.subtitle}>MANIFESTO DE CARGA</Text>
                        <View style={styles.containerIntroItems}>
                            <View style={styles.introImg}>
                                <Image style={styles.logo} src="/logo.png" />
                            </View>
                            <View style={styles.introItems}>
                                <Text style={styles.title}>MANIFESTO DE CARGA</Text>
                            </View>
                        </View>


                        <View style={styles.items}>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.key}>REMITENTE</Text>
                                <Text style={styles.key}>MANISFESTO DE LA CARGA</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 1"] && pdfData["MC-MANISFESTO 1"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 2"] && pdfData["MC-MANISFESTO 2"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 3"] && pdfData["MC-MANISFESTO 3"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 4"] && pdfData["MC-MANISFESTO 4"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 5"] && pdfData["MC-MANISFESTO 5"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 6"] && pdfData["MC-MANISFESTO 6"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 7"] && pdfData["MC-MANISFESTO 7"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 8"] && pdfData["MC-MANISFESTO 8"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.key}>CONSIGNARIO</Text>
                                <Text style={styles.key}>TRANSPORTADOR</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 9"] && pdfData["MC-MANISFESTO 9"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 10"] && pdfData["MC-MANISFESTO 10"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 11"] && pdfData["MC-MANISFESTO 11"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 12"] && pdfData["MC-MANISFESTO 12"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 13"] && pdfData["MC-MANISFESTO 13"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 14"] && pdfData["MC-MANISFESTO 14"]}</Text>
                            </View>
                            <View style={styles.viewKeyValueTwo}>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 15"] && pdfData["MC-MANISFESTO 15"]}</Text>
                                <Text style={styles.value}>{pdfData && pdfData["MC-MANISFESTO 16"] && pdfData["MC-MANISFESTO 16"]}</Text>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>DATOS DEL TRANSPORTISTA</Text>
                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                        </View>

                        <Text style={styles.subtitle}>INFORMACION DEL SERVICIO</Text>
                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                        </View>


                        <View style={styles.items}>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>DOCUMENTACION SOPORTE</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>INSTRUCCIONES DEL TRANSPORTE</Text>

                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.key}>DOCUMENTO</Text>
                                <Text style={styles.key}>NUMERO</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>TELEFONO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["telefono"] && pdfData["telefono"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CIUDAD</Text>
                                <Text style={styles.value}>{pdfData && pdfData["ciudad"] && pdfData["ciudad"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>
                            <View style={styles.viewKeyValue}>
                                <Text style={styles.value}>CARGO</Text>
                                <Text style={styles.value}>{pdfData && pdfData["cargo"] && pdfData["cargo"]}</Text>
                            </View>

                        </View>



                        <Text style={styles.subtitle}>OBSERVACIONES EN ORIGEN</Text>

                        <View style={styles.viewKeyValueTwo} >
                            <Text style={styles.valueTwo}>{pdfData[`CA-INCLUYE`] && pdfData[`CA-INCLUYE`]}</Text>
                        </View>


                        <Text style={styles.subtitle}>OBSERVACIONES EN DESTINO</Text>


                        <View style={styles.viewKeyValueTwo} >
                            <Text style={styles.valueTwo}>{pdfData[`CA-EXCLUYE`] && pdfData[`CA-EXCLUYE`]}</Text>
                        </View>



                        <View style={styles.viewKeyValueElaborado} >
                            <Text style={styles.valueElaborador}></Text>
                            <Text style={styles.valueElaborador}>ELABORADO POR:</Text>
                            <Text style={styles.valueElaboradorLine}>{pdfData && pdfData[`CA-ELABORADOR`] && pdfData[`CA-ELABORADOR`]}</Text>
                        </View>

                        <View style={styles.viewKeyValueTwoYellow} >
                            <Text style={styles.valueElaborador}></Text>
                            <Text style={styles.valueElaborador}>ACEPTACION DE SERVICIO:</Text>
                            <Text style={styles.valueElaborador}></Text>
                        </View>
                        <View style={styles.viewKeyValueTwo}>
                            <Text style={styles.valueElaborador}></Text>
                            <Text style={styles.valueElaborador}>NOMBRE:</Text>
                            <Text style={styles.valueElaboradorLine}></Text>
                        </View>
                        <View style={styles.viewKeyValueTwo} >
                            <Text style={styles.valueElaborador}></Text>
                            <Text style={styles.valueElaborador}>CI:</Text>
                            <Text style={styles.valueElaborador}></Text>
                        </View>

                    </Page>
                </Document>}
                fileName='Cotizacion Terrestre'>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={'buttonSecondary'} click={click}>pdf</Button>
                </div>
            </PDFDownloadLink>}
        </div>
    )
}


export default PDFView

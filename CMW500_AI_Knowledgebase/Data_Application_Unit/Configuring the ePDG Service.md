# Configuring the ePDG Service

Module: Data Application Unit
Source: 58f798f3de4f4407.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring the ePDG Service
Configuring the ePDG Service
// *****************************************************************************
// Configure ePDG addresses.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:ADDRess:IPVFour '192.168.1.202'
CONFigure:DATA:CONTrol:EPDG:ADDRess:IPVSix 'fc01::2'
// *****************************************************************************
// Configure the ePDG ID.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:ID:TYPE FQDN
CONFigure:DATA:CONTrol:EPDG:ID:VALue 'Epdg.rs.org'
// *****************************************************************************
// Configure IKEv2 settings.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:IKE:ENCRyption ON, ON
CONFigure:DATA:CONTrol:EPDG:IKE:PRF ON, ON, ON, ON, ON
CONFigure:DATA:CONTrol:EPDG:IKE:INTegrity ON, ON, ON, ON, ON, ON
CONFigure:DATA:CONTrol:EPDG:IKE:DHGRoup ON, ON, ON, ON, ON, ON, ON, ON
// *****************************************************************************
// Configure ESP settings.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:ESP:ENCRyption ON, ON
CONFigure:DATA:CONTrol:EPDG:ESP:INTegrity ON, ON, ON, ON, ON, ON
// *****************************************************************************
// Configure IKEv2 attribute settings.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:PCSCf:AUTO OFF
CONFigure:DATA:CONTrol:EPDG:PCSCf:IPVFour:TYPE 20
CONFigure:DATA:CONTrol:EPDG:PCSCf:IPVSix:TYPE 21
CONFigure:DATA:CONTrol:EPDG:PCSCf:IPVSix:ADDRess:LENGth L16
// *****************************************************************************
// Configure authentication settings.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:AUTHentic:IMSI '001010123456063'
CONFigure:DATA:CONTrol:EPDG:AUTHentic:ALGorithm MILenage
CONFigure:DATA:CONTrol:EPDG:AUTHentic:KEY #H102030405060708090A0B0C0D0E0F
CONFigure:DATA:CONTrol:EPDG:AUTHentic:RAND #H12ACF4321
CONFigure:DATA:CONTrol:EPDG:AUTHentic:AMF #H8000
CONFigure:DATA:CONTrol:EPDG:AUTHentic:OPC #H1233CB71954A9F4E48A5994E37A02BAF
// *****************************************************************************
// Configure dead peer detection.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:DPD:ENABle ON
CONFigure:DATA:CONTrol:EPDG:DPD:INTerval 5
CONFigure:DATA:CONTrol:EPDG:DPD:TIMeout 30
// *****************************************************************************
// Configure the certificate usage for SSL.
// *****************************************************************************
CONFigure:DATA:CONTrol:EPDG:CERTificate:ENABle ON
CONFigure:DATA:CONTrol:EPDG:CERTificate:KEY "myKeyFile.pem"
CONFigure:DATA:CONTrol:EPDG:CERTificate:CERTificate "myCertificateFile.pem"
// *****************************************************************************
// Start the ePDG service.
// *****************************************************************************
SOURce:DATA:CONTrol:EPDG:STATe ON
Top
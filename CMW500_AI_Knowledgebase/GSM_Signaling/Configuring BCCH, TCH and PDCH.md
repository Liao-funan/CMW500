# Configuring BCCH, TCH and PDCH

Module: GSM Signaling
Source: df6954979b594eb9.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring BCCH, TCH and PDCH
Configuring BCCH, TCH and PDCH
// *****************************************************************************
// Define the cell's BCCH:
// - GSM 900 band, channel 20
// - maximum allowed MS output power 33 dBm (PCL 5)
// - level -80 dBm, disable limit check
// *****************************************************************************
CONFigure:GSM:SIGN:BAND:BCCH G09
CONFigure:GSM:SIGN:RFSettings:CHANnel:BCCH 20
CONFigure:GSM:SIGN:RFSettings:PMAX:BCCH 5
CONFigure:GSM:SIGN:RFSettings:LEVel:BCCH -80
CONFigure:GSM:SIGN:RFSettings:LEVel:BCCH:MINimum:ENABle OFF
// *****************************************************************************
// Set the traffic channel no to 62 and the DL reference level to -80 dBm.
// *****************************************************************************
CONFigure:GSM:SIGN:RFSettings:CHANnel:TCH 62
CONFigure:GSM:SIGN:RFSettings:LEVel:TCH -80
// *****************************************************************************
// Set the power control level for the uplink to 10, which corresponds to
// an absolute level of -23 dBm in the GSM 900 band.
// *****************************************************************************
SENSe:GSM:SIGN:BAND:TCH?
CONFigure:GSM:SIGN:RFSettings:PCL:TCH:CSWitched 10
// *****************************************************************************
// Configure frequency hopping: specify the hopping sequence, 
// the Mobile Allocation Index Offset (MAIO)
// and the Hopping Sequence Number (HSN); enable frequency hopping.
// *****************************************************************************
CONFigure:GSM:SIGN:RFSettings:HOPPing:SEQuence:TCH 1,62,124,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,
    OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF
CONFigure:GSM:SIGN:RFSettings:HOPPing:MAIO:TCH 0
CONFigure:GSM:SIGN:RFSettings:HOPPing:HSN:TCH 0
CONFigure:GSM:SIGN:RFSettings:HOPPing:ENABle:TCH ON
Top
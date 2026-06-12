# Configuring Connection Settings

Module: WLAN Signaling
Source: 04af80e01d9d45a8.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring Connection Settings
Configuring Connection Settings
// *****************************************************************************
// Configure beacon interval, DTIM period, MAC address, SSID, country code.
// Set HT smoothing bit. 
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:BEACon 110
CONFigure:WLAN:SIGN:CONNection:DPERiod 2
CONFigure:WLAN:SIGN:CONNection:BSSid #H1230123
CONFigure:WLAN:SIGN:CONNection:SSID "myCMW"
CONFigure:WLAN:SIGN:CONNection:CCODe:CCSTate ENABle
CONFigure:WLAN:SIGN:CONNection:CCODe:CCConf "US", 0, 50, 3
CONFigure:WLAN:SIGN:CONNection:SMOothing NREC
// *****************************************************************************
// Configure supported rates.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:SRATes ENABle
CONF:WLAN:SIGN:CONN:SRATes:OFDMconf MAND,MAND,MAND,MAND,OPT,OPT,OPT,OPT
CONF:WLAN:SIGN:CONN:SRATes:OMCSconf SUPP,NOTS,SUPP,NOTS,SUPP,NOTS,SUPP,NOTS
CONF:WLAN:SIGN:CONN:SRATes:VHTConf MC08
// *****************************************************************************
// Configure frame rate control for management frames and data frames.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:MFDef ENABle, HTG, MCS1
CONFigure:WLAN:SIGN:CONNection:DFDef ENABle, HTG, BW20, MCS6
// *****************************************************************************
// Configure security settings for WPA personal:
// mechanism, encryption type, WPS settings
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:SECurity:PASSphrase WPERsonal, "12345678"
CONFigure:WLAN:SIGN:CONNection:SECurity:ENCRyption TKIP
CONFigure:WLAN:SIGN:CONNection:SECurity:WPS:ATYPe ON, DISPlay, "5879"
Other connection settings
The following connection settings are a preparation for other configurations. They are not relevant for the selected configuration (operation mode AP, standard 802.11n greenfield, WPA personal).
// *****************************************************************************
// DSSS: supported rates and RX filter
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:SRATes:DSSSconf DIS, DIS, DIS, DIS
CONFigure:WLAN:SIGN:CONNection:RXFilter AUTO
// *****************************************************************************
// Wi-Fi Direct: authentication type and device properties
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:WDIRect:ATYPe DISPlay, MANual, "1122"
CONF:WLAN:SIGN:CONNection:WDIRect:WDConf "R&S", "CMW", "222", "55223", "R&S-CMW"
// *****************************************************************************
// Hotspot 2.0: basic and supplementary parameters, BSS load element
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:HOTSpot:MNDigits TWDigits
CONF:WLAN:SIGN:CONN:HOTS:HSPar PNET,UNSP,0,#H1234,"R&S",262,30,"op1","operator"
CONFigure:WLAN:SIGN:CONNection:HOTSpot:PLMN2 ON, 262, 31, TWDigits
CONFigure:WLAN:SIGN:CONNection:HOTSpot:DNAMe2 ON, "op2"
CONF:WLAN:SIGN:CONN:HOTSpot:HSSPar 5000, 5000, ATAVailable, PIAavailable,
    "exmp.org", APRime, ON, ATConditions
CONFigure:WLAN:SIGN:CONNection:HOTSpot:REALm2 ON, "ex1.org", ON, ON, OFF, ON, ON
CONFigure:WLAN:SIGN:CONNection:HOTSpot:CUTil 10, 20, 30000
// *****************************************************************************
// Station: allowed AP and connection mode
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:STATion:SCONnection ANY
CONFigure:WLAN:SIGN:CONNection:STATion:CMODe MANual
// *****************************************************************************
// Security settings for WPA enterprise: radius server mode, internal radius
// server configuration, external radius server settings
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:SECurity:RSERver:MODE INTernal
CONFigure:WLAN:SIGN:CONNection:SECurity:ESIM:KTONe
    "15555555555555555555555555555551", "15545751", "1011111111111101"
CONFigure:WLAN:SIGN:CONNection:SECurity:ESIM:KTTWo
    "25555555555555555555555555555552", "25545752", "2011111111111102"
CONFigure:WLAN:SIGN:CONNection:SECurity:ESIM:KTTHree
    "35555555555555555555555555555553", "35545753", "3011111111111103"
CONFigure:WLAN:SIGN:CONNection:SECurity:EAKA:KALGo
    "000102030405060708090a0b0c0d0e0f", "12555555555555555555555555555551",
    "13555555555555555555555555555551", MILenage
CONFigure:WLAN:SIGN:CONNection:SECurity:RSERver:ICONf 172, 22, 1, 111
CONFigure:WLAN:SIGN:CONNection:SECurity:RSERver:PNUMber 1812
CONFigure:WLAN:SIGN:CONNection:SECurity:RSERver:SKEY "mykey"
IEEE 802.11ax connection settings
The following connection settings are specific for high efficiency (HE) connections.
// *****************************************************************************
// Set BSS color, enable A-MPDU, multiple TIDs and set the length of A-MPDU. 
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:BSSColor 2
CONFigure:WLAN:SIGN:CONNection:AMPDu ENAB, ENAB, 150
/// *****************************************************************************
// Configure frame rate control for data frames: enable data frames, set
// frame format, channel bandwidth, MCS, guard interval, LTF length, PE duration,
// coding. Set RU allocation subfield, query RU allocations.
// Configure payload: map user 1 and dummy users to RU. Set MCS and coding
// type for corresponding users.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:DFDef ENABle, HES, BW20, MCS10, GI08, X1, PE4, BCC
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:ALSField A200 CHA1
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:BLALlocation?
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:RUALlocation USR1,CHA1,RU1
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:RUALlocation DMY1,CHA1,RU2
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:RUALlocation DMY2,CHA1,RU3
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:USER1:ALLocation CHA1,RU1
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:USER1:MCS MCS5
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:USER1:CTYPe BCC
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:DUMMy1:MCS MCS10
CONFigure:WLAN:SIGN:CONNection:DFRame:HEMU:DUMMy2:MCS MCS10
/// *****************************************************************************
// Configure trigger frame - common info: select the trigger type, set length,
// require CS check. Set bandwidth, LTF type, MU-MIMO LTF, LDPC extra symbol.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:HETF:TTYP BSRP
CONFigure:WLAN:SIGN:CONNection:HETF:LEN 4095
CONFigure:WLAN:SIGN:CONNection:HETF:CSR ON
CONFigure:WLAN:SIGN:CONNection:HETF:CHBW BW80
CONFigure:WLAN:SIGN:CONNection:HETF:GILT L432
CONFigure:WLAN:SIGN:CONNection:HETF:MLTF SING
CONFigure:WLAN:SIGN:CONNection:HETF:LDPC OFF
/// *****************************************************************************
// Configure trigger frame - user info: select RU size, coding type, MCS,
// DCM, query starting spatial stream and number of spatial streams.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:HETF:RUAL RU52
CONFigure:WLAN:SIGN:CONNection:HETF:CTYP LDPC
CONFigure:WLAN:SIGN:CONNection:HETF:MCS MCS11
CONFigure:WLAN:SIGN:CONNection:HETF:DCM ON
CONFigure:WLAN:SIGN:CONNection:HETF:SSS?
CONFigure:WLAN:SIGN:CONNection:HETF:NSS?
/// *****************************************************************************
// Configure trigger frame transmission: send the trigger once.
//
// Alternatively send the trigger periodically in specified intervals.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:HETF:SSTX
CONFigure:WLAN:SIGN:CONNection:HETF:TXEN ON
CONFigure:WLAN:SIGN:CONNection:HETF:TXP 100
Top
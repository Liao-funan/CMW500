# Slot Configuration and Resulting Throughput

Module: GSM Signaling
Source: 8a294ca5e4e449e9.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Slot Configuration and Resulting Throughput
Slot Configuration and Resulting Throughput
The following commands configure the generated GSM downlink signal and control the UL signals of the mobile station under test, in particular for packet switched connections and multislot operation. The resulting PS RLC throughput can be queried.
List of Commands
CONFigure:GSM:SIGN<i>:CONNection:ASConfig
CONFigure:GSM:SIGN<i>:CONNection:DSConfig
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:ENABle:UL
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:GAMMa:UL
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:ENABle:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:LEVel:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:CSCHeme:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:UDCYcle:DL
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:COMBined:CARRier<c>
SENSe:GSM:SIGN<i>:CONNection:ETHRoughput:DL?
SENSe:GSM:SIGN<i>:CONNection:ETHRoughput:UL?
Top
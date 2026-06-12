# Setting Up a Network Connection

Module: WLAN Signaling
Source: e5c31bada23f45f9.htm

## 原始指令文档说明
WLAN Signaling
 > 
Application Sheets
 > 
WLAN Signaling Tests (Remote Control)
 > 
Setting Up a Network Connection
Setting Up a Network Connection
For PER tests, an active WLAN connection to the DUT is a prerequisite. The following assumptions apply to the examples in this application sheet:
Connector: The DUT is connected to RF 1 COM for uplink and downlink
Standard: IEEE 802.11a
RF carrier frequency: 5180 MHz
Expected peak envelope power: 25 dBm
Perform an initial reset. Configure the signaling application according to these assumptions. We use a burst output power level of -40 dBm for the generated DL frames.
*RST
ROUTe:WLAN:SIGN:SCENario:SCELl:FLEXible SUU1,RF1C,RX1,RF1C,TX1
CONFigure:WLAN:SIGN:CONNection:STANdard ASTD
CONFigure:WLAN:SIGN:RFSettings:FREQuency 5.18E+9
CONFigure:WLAN:SIGN:RFSettings:EPEPower 25
CONFigure:WLAN:SIGN:RFSettings:BOPower -40
Enable signaling. Wait some seconds until the DUT association is complete. If you enable signaling for the first time after starting the instrument, it can take a while to generate the RF output signal. Use the following command:
SOURce:WLAN:SIGN:STATe ON
Top
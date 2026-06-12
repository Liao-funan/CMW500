# Configure Test Mode

Module: Bluetooth Signaling
Source: 736bc91a3b2e4da5.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configure Test Mode
Configure Test Mode
// *****************************************************************************
// Set operating mode to RF test.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:OPMode RFT; *OPC?
/// *****************************************************************************
// Enable hopping, enable the user defined adaptive frequency hopping.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RFSettings:HOPPing ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:AFHopping ON, USER; *OPC?
Start the test.
For a loopback test, see 
"Loopback test mode"
Alternatively, for a connection test, see 
"Retrieve EUT Information and Capabilities"
/// *****************************************************************************
// Specify channel map and wait 1 s for new channel map to take effect.
// Query the current channel map.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RFSettings:AFHopping:UCHannels 0,1,1,1,0,0,1,1,1,
1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,
1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0
SENSe:BLUetooth:SIGN:CMAP?
// *****************************************************************************
// Set packet type, packet length and pattern type for basic
// rate packets. 
// Alternatively configure EDR packets.
// Alternatively configure LE packets.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PTYPe:BRATe DH3; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PATTern:BRATe PRBS9; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PLENgth:BRATe 21,183,339
*OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PTYPe:EDRate E25P; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PATTern:EDRate PRBS9; *OPC?
CONFigure:BLUetooth:SIGN:CONN:PACK:PLEN:EDR 21,367,679,83,552,1021; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PATTern:LENergy:LE1M P11; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PLENgth:LENergy:LE1M 255; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PATTern:LENergy:LE2M P11; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PLENgth:LENergy:LE2M 255; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PATTern:LENergy:LELR ALL1; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PACKets:PLENgth:LENergy:LELR 255; *OPC?
// *****************************************************************************
// Specify delay for test mode activation.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:DELay:TMODe 2
Transmitter test mode
/// *****************************************************************************
// Settings for TX test mode: channel, poll period, delay for poll timeout.
// Enable test mode at the EUT via USB. Connect in TX test mode.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:TMODe TXTest; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:CHANnel:TXTest 13; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:FREQuency:TXTest?
CONFigure:BLUetooth:SIGN:CONNection:PPERiod 1; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PPERiod:MINimum ON; *OPC?
CONFigure:BLUetooth:SIGN:DELay:PTIMeout 2
CONFigure:BLUetooth:SIGN:COMSettings:ETMode ON
CALL:BLUetooth:SIGN:CONNection:ACTion TMConnect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "TCON"
// *****************************************************************************
// Display used channels by adaptive hopping.
// *****************************************************************************
SENSe:BLUetooth:SIGN:CMAP?
Loopback test mode
// *****************************************************************************
// Settings for loopback mode: dirty TX, channel on CMW and EUT, whitening.
// Enable dirty transmitter. Enable test mode at the EUT via USB and connect
// in loopback mode.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:TMODe LOOPback; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:BRATe SPEC; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:EDRate SPEC; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:CHANnel:LOOPback 13,13; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:FREQuency:LOOPback?
CONFigure:BLUetooth:SIGN:CONNection:WHITening ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX ON; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings:ETMode ON
CALL:BLUetooth:SIGN:CONNection:ACTion TMConnect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "TCON"
// *****************************************************************************
// Perform measurement with the Bluetooth Measurement firmware application.
// Close the connection.
// *****************************************************************************
CALL:BLUetooth:SIGN:CONNection:ACTion DET
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "SBY"
Direct test mode
// *****************************************************************************
// Connect EUT, configure USB connection parameters.
// Settings for direct test mode: specify LE burst type, physical layer,
// dirty TX,channel and synch word. Enable dirty transmitter.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:BTYPe LE; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PHY:LENergy LE1M; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:LEN SPEC; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:CHANnel:DTMode 39; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:SYNWord:LENergy #H71764129; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:FREQuency:DTMode?
CONFigure:BLUetooth:SIGN:RFSettings:DTX ON; *OPC?
// *****************************************************************************
// Alternativelly specify LE coded physical layer and
// its coding.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:BTYPe LE; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PHY:LENergy LELR; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:FEC:LENergy:LRANge S8
// *****************************************************************************
// Reset EUT, verify the connection for direct test.
// *****************************************************************************
CALL:BLUetooth:SIGN:LENergy:RESet
CALL:BLUetooth:SIGN:CONNection:CHECk:LENergy?
// *****************************************************************************
// Perform TX or RX tests.
// TX test: perform TX measurements using Bluetooth Measurement 
//          application in combined signal path
// RX test: perform RX quality measurements as described below
// *****************************************************************************
See 
"BER and PER Rx Tests"
.
Top
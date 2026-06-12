# Configure Dirty Transmitter

Module: Bluetooth Signaling
Source: 9adf09b7702e4e14.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configure Dirty Transmitter
Configure Dirty Transmitter
// *****************************************************************************
// Configure single values of dirty transmitter for BR:
// enable frequency drift, set frequency offset, modulation index and
// symbol time error. Enable dirty transmitter.
// 
// Alternatively configure dirty transmitter for BR according to the test 
// specification, query all parameters.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:BRATe SING; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:FDRift:BRATe ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:FOFFset:BRATe 100E+3; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:MINDex:BRATe 0.3; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:STERror:BRATe NEG20; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:BRATe SPEC; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:FDRift:BRATe?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:FOFFset:BRATe?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:MINDex:BRATe?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:STERror:BRATe?
// *****************************************************************************
// Configure single values of dirty transmitter for LE2M PHY:
// enable frequency drift, set frequency offset, modulation index and
// symbol time error. Specify also drift rate of 1250 Hz.
// Enable dirty transmitter.
// 
// Alternatively configure dirty transmitter for LE2M PHY according
// to the test specification. Use standard modulation index and
// drift rate of 625 Hz. Enable dirty transmitter, query all parameters.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:LENergy:LE2M SING; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:FDRift:LENergy:LE2M ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:FOFFset:LENergy:LE2M ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:FOFFset:LENergy:LE2M 250E+3; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:MINDex:MODE:LENergy:LE2M STAN; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:MINDex:STANdard:LEN:LE2M 0.5; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:SING:STERror:LENergy:LE2M POS50; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODFrequency:LENergy:LE2M HDRF; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODE:LENergy:LE2M SPEC; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MINDex:MODE:LENergy:LE2M STAN; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:MODFrequency:LENergy:LE2M LDRF; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX ON; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:FDRift:LENergy:LE2M?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:FOFFset:LENergy:LE2M?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:MINDex:STANdard:LENergy:LE2M?
CONFigure:BLUetooth:SIGN:RFSettings:DTX:STAB:STERror:LENergy:LE2M?
Top
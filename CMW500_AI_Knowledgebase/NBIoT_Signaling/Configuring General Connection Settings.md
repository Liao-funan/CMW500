# Configuring General Connection Settings

Module: NBIoT Signaling
Source: 9315309c3cd746ec.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring General Connection Settings
Configuring General Connection Settings
// *****************************************************************************
// Select the test mode and configure it.
// Prepare settings for the data application mode.
// Configure RRC connection release. Allow PSM.
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:CTYPe TEST
CONFigure:NIOT:SIGN:CONNection:TMODe ON
CONFigure:NIOT:SIGN:CONNection:TMODe:IPVersion IPV4
CONFigure:NIOT:SIGN:CONNection:DAPPlication:CIOT CPL
CONFigure:NIOT:SIGN:CONNection:DAPPlication:IPVersion IPV4
CONFigure:NIOT:SIGN:CONNection:RRC:KEEP OFF
CONFigure:NIOT:SIGN:CONNection:RRC:TIMer 4
CONFigure:NIOT:SIGN:CONNection:PSMallowed ON
// *****************************************************************************
// Enable extended DRX and configure the eDRX settings for the idle mode.
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:EDRX:IMODe:ENABle ON
CONFigure:NIOT:SIGN:CONNection:EDRX:IMODe:PTWindow W5K12
CONFigure:NIOT:SIGN:CONNection:EDRX:IMODe:CLENgth L4K
Top
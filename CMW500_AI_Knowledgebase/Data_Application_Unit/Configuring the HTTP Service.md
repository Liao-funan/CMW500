# Configuring the HTTP Service

Module: Data Application Unit
Source: b46884db273e4962.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring the HTTP Service
Configuring the HTTP Service
// *****************************************************************************
// Allow access to internal Web server from external network and
// enable IPv6 support.
// *****************************************************************************
CONFigure:DATA:CONTrol:HTTP:ENConnection ON
CONFigure:DATA:CONTrol:HTTP:IPVSix ON
// *****************************************************************************
// Start the HTTP service.
// *****************************************************************************
SOURce:DATA:CONTrol:HTTP:STATe ON
Top
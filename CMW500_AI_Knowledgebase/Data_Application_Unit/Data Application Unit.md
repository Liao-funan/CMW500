# Data Application Unit

Module: Data Application Unit
Source: aadd99266cfe4196.htm

## 原始指令文档说明
Data Application Unit
The data application unit (DAU, option R&S CMW-B450x) provides a common data testing solution for supported radio access technologies.
It allows you to test End-to-End (E2E) IP data transfer and to perform user plane (U-plane) tests for an IP connection to a device under test (DUT). The connection can be set up via a signaling application or a protocol test application.
The DAU is independent of the underlying radio access network. It provides a common user plane handling and ensures data continuity during handover from one radio access technology to another one.
The DAU also hosts IP services that have been optimized for high throughput and are running in an isolated controlled environment to ensure reproducible test results.
IP services
The following internal IP services are currently available:
File transfer via file transfer protocol (FTP)
Web browsing via hypertext transport protocol (HTTP)
IP multimedia subsystem (IMS) server supporting voice over IMS and SMS over IMS (R&S CMW-KAA20 required)
DNS server supporting DNS requests of type A, AAAA and SRV
Evolved packet data gateway (ePDG) for WLAN offloading (R&S CMW-KA065 required)
Mini service layer for eMBMS (R&S CMW-KAA30 required)
You can use the FTP and HTTP services, for example, to access the built-in DAU web server from the DUT. If desired, you can add own web pages to the server. An additional system drive integrated in the DAU allows the storage of large media files for data transfer tests.
The IMS server allows an IMS client on the DUT to register to the IMS domain. Optionally, an authentication can be performed. After successful registration, you can initiate mobile-originating and mobile-terminating voice over IMS calls. With two registered DUTs, you can perform mobile-to-mobile calls. Message transfer over IMS is also possible, via the short message service (SMS) or via the rich communication suite (RCS, option R&S CMW-KAA21 required).
The DNS server can be used to answer DNS queries for IPv4 addresses, IPv6 addresses and domains supporting a specific service. The DNS server database is configurable. Thus you can, for example, redirect the DUT to the web server of the DAU when it tries to browse a specific internet domain. DNS queries for which the local database contains no matching entry can be forwarded to an external DNS server.
The ePDG acts as gateway to an untrusted WLAN network. It provides security mechanisms required for WLAN offloading tests where an IPsec tunnel from the core network through the WLAN network to the DUT must be set up.
The mini service layer for eMBMS provides unicast and multicast services for eMBMS tests, controlled via CMWcards or via protocol test applications.
If connected to an external network, the DAU acts as IP gateway, separating the R&S
 
CMW internal IP network from the external IP network. The DUT can use both the embedded IP services provided by the DAU and the IP services provided by the external network. For example, it can access web servers and DNS servers both in the internal network and in the external network.
DAU measurements
For DAU measurements, option R&S CMW-KM050 is required. It provides the following measurement applications for testing the properties of an IP connection to the DUT:
Ping measurement, testing the network latency
Iperf measurement, testing the throughput and reliability, using TCP/IP and UDP/IP
Throughput measurement, indicating the total throughput at the DAU on IP level
DNS request measurement, monitoring all DNS queries addressed to the internal DNS server
IP logging application, creating log files of the IP traffic at the LAN DAU connector or between DAU and DUT
IP analysis application, monitoring and analyzing the uplink and downlink IP traffic of the DUT (R&S CMW-KM051 required in addition to R&S CMW-KM050).
For IP connection security analysis, you need also R&S CMW-KM052.
IP replay application, replaying IP traffic from packet capture files
Audio delay measurement, analyzing the transit time and timing error of voice call audio packets
The DAU supports the internet protocols IPv4 and IPv6. Both can be used individually or in parallel, depending on the IP connection established by the radio access network. IPv4 requires option R&S CMW-KA100, IPv6 requires also option R&S CMW-KA150.
Option R&S CMW-KA150 is also required for IP multicast traffic (IPv4 or IPv6) and thus for eMBMS tests.
Usually, the DAU is installed on the R&S
 
CMW that establishes the IP connection to the DUT. If all expansion slots of this R&S
 
CMW are occupied by other hardware options, a DAU installed on another R&S
 
CMW can be used instead. For such an "external DAU" setup, option R&S CMW-KA120 is required on both instruments.
You can control the DAU manually via a graphical user interface or remotely via SCPI commands. Protocol test applications can control the DAU via the CDAU interface.
Contents
What's New in This Version
General Description
DAU Services GUI Reference
DAU Measurements GUI Reference
Programming
DAU Services Command Reference
DAU Measurements Command Reference
Annex: Network Impairments
List of Commands
Top
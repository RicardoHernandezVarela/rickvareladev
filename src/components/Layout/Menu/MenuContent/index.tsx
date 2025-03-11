import NextLink from "next/link";
import { Flex, Text, Link } from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaGlasses, FaLaptopCode } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineWork, MdOutlineRateReview } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { PiVinylRecordDuotone } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";

import { menuOptions, contactOptions } from "./menuOptions";

const icons: { [key: string]: any } = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  BiLogoGmail: BiLogoGmail,
  FaGlasses: FaGlasses,
  MdOutlineWork: MdOutlineWork,
  ImLab: ImLab,
  PiVinylRecordDuotone: PiVinylRecordDuotone,
  MdOutlineRateReview: MdOutlineRateReview,
  GoCodeReview: GoCodeReview,
  FaLaptopCode: FaLaptopCode,
};

const styles = {
  mainContainer: {
    w: "100%",
    h: "100vh",
    px: "30px",
    py: { base: "20px", lg: "10px", xl: "20px" },
    alignItems: "center",
  },
  imageContainer: {
    w: { md: "100px", lg: "120px", xl: "150px" },
    h: { md: "100px", lg: "120px", xl: "150px" },
    mb: { md: "5px", lg: "20px", xl: "35px" },
    borderRadius: "full",
    boxShadow: "md",
  },
  menuOptionsContainer: {
    w: "100%",
    mt: { base: "25px", lg: "0px" },
  },
  menuValues: {
    mb: "15px",
  },
  mainOptionText: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "1px",
    color: "mainMenuOption",
    mb: "20px",
  },
  subOption: {
    w: "max-content",
    display: "flex",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      color: "byzantineBlue",
    },
    alignItems: "center",
    mb: "12px",
  },
  subOptionIcon: { color: "#1D84D7" },
  subOptionText: {
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "18px",
    letterSpacing: "0.5px",
    color: "delftBlue",
    _hover: {
      color: "byzantineBlue",
    },
    ml: "10px",
  },
  contactContainer: {
    w: "100%",
    alignItems: "center",
    px: "20px",
    mt: "15px",
  },
  contactIcons: {
    w: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contactIcon: {
    width: "20px",
    height: "20px",
    color: "#1D84D7",
  },
};

function MenuContent({ onClose }: { onClose: () => void }) {
  const menuValues = Object.values(menuOptions);

  return (
    <Flex {...styles.mainContainer} direction="column">
      {/* IMAGE */}
      <Flex
        {...styles.imageContainer}
        display={{ base: "none", md: "flex" }}
      ></Flex>

      {/* MENU */}

      <Flex {...styles.menuOptionsContainer} direction="column">
        {menuValues.map((item: any, index: number) => {
          return (
            <Flex key={index} {...styles.menuValues} direction="column">
              <Text {...styles.mainOptionText} textTransform="uppercase">
                {item.title}
              </Text>

              <Flex direction="column">
                {item.items.map((option: any, indx: number) => {
                  const Icon = icons[option.icon];

                  return (
                    <Link
                      key={indx}
                      as={NextLink}
                      {...styles.subOption}
                      href={option.route}
                      onClick={onClose}
                    >
                      <Icon style={styles.subOptionIcon} />

                      <Text
                        {...styles.subOptionText}
                        textTransform="capitalize"
                      >
                        {option.text}
                      </Text>
                    </Link>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      {/* CONTACT */}
      <Flex {...styles.contactContainer} direction="column">
        <Text {...styles.mainOptionText} textAlign="center">
          Contact
        </Text>

        <Flex {...styles.contactIcons}>
          {contactOptions.map((item: any, index: number) => {
            const Icon = icons[item.icon];

            return (
              <Link key={index} isExternal href={item.link}>
                <Icon style={styles.contactIcon} />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MenuContent;

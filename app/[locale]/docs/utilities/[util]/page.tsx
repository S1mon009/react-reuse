import { Separator } from "@/components/ui/separator";
import Heading from "@/components/docs/heading";
import Footer from "@/components/docs/footer";
import { Layout } from "@/components/layouts/layout";
import Translation from "@/components/translation/translation";
import SectionNavigationList from "@/components/navigation/section_navigation/section-navigation-list";
import { useTranslations } from "next-intl";
import { getPrevNextValue } from "@/lib/utils";
import { roughNotationColor } from "@/config/rought-notation-color";
import { keys as linkKeys } from "@/keys/sidebar-links-keys";
import { keys as categoryKeys } from "@/keys/links-keys";

const translation: string = "Data.Utilities.Items";
const sectionItemsTranslation: string = "Data.Utilities.SectionItems";

interface pageProps {
  params: {
    util: string;
  };
}

/**
 * Page component renders details for a specific util, including util code, usage example,
 * and additional parameters. It supports localization (i18n) and is responsive for a11y improvements.
 *
 * Props:
 * - params (object):
 *  - util (string): The util name.
 *
 * @param {pageProps} props - Contains the params object.
 * @returns {JSX.Element} The rendered Page component.
 */
export default function Page({ params }: Readonly<pageProps>): JSX.Element {
  const t = useTranslations(`${translation}.${params.util}`);
  const sectionItems = useTranslations(sectionItemsTranslation);
  const footerItems = useTranslations("Data");
  const footerLinks = getPrevNextValue(params.util, linkKeys, categoryKeys);

  return (
    <>
      <Heading title={t("Name")} color={roughNotationColor} />
      <Layout type="section" id={params.util}>
        <Translation keyMessage={`${translation}.${params.util}.Content`} />
      </Layout>
      <Separator className="my-5" aria-hidden="true" />
      <Footer
        data={[
          {
            link: `${footerItems(
              `${footerLinks?.prevCategory}.Items.${footerLinks?.prev}.Link`
            )}`,
            title: sectionItems("Footer.Previous"),
            description: footerItems(
              `${footerLinks?.prevCategory}.Items.${footerLinks?.prev}.Name`
            ),
          },
          {
            link: `${footerItems(
              `${footerLinks?.nextCategory}.Items.${footerLinks?.next}.Link`
            )}`,
            title: sectionItems("Footer.Next"),
            description: footerItems(
              `${footerLinks?.nextCategory}.Items.${footerLinks?.next}.Name`
            ),
          },
        ]}
      />
      <Layout
        type="aside"
        className="hidden md:block fixed top-14 right-0 h-full w-1/5 p-4"
      >
        <SectionNavigationList sectionId={params.util} />
      </Layout>
    </>
  );
}

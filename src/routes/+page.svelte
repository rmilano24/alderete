<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  const phoneNumber = "831.432.3231";
  let phoneContainer: HTMLAnchorElement | null = null;
  let phoneChars = phoneNumber.split("");

  onMount(() => {
    gsap.from("h1", { y: 50, opacity: 0, duration: 1, ease: "power2.out" });
    if (phoneContainer) {
      gsap.from(
        phoneContainer.querySelectorAll(".phone-char"),
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }
  });
</script>

<section id="home-hero" class="h-screen bg-cover bg-center flex items-end bg-amber-900">
	<div class="w-full m-6 max-md:m-3">
		<div class="flex ml-4 mb-4 max-md:ml-0 max-md:mb-0">
			<div class="glass rounded-2xl border border-white/20 p-8 mr-6 max-md:mr-0 max-w-[532px] max-md:min-w-full shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)]">
				<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">A trusted santa cruz dentist, since 2009</h5>
				<h1 class="text-5xl text-white font-reckless mt-8 max-w-xl">Test Exceptional care for <span class="italic">all ages</span></h1>
			</div>
			<div class="max-md:hidden glass rounded-2xl border border-white/20 min-w-64 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8">
					<div>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 4.55556C1 3.61256 1.3746 2.70819 2.0414 2.0414C2.70819 1.3746 3.61256 1 4.55556 1H10.3867C10.7596 1.00028 11.1231 1.11786 11.4255 1.33609C11.728 1.55432 11.9541 1.86214 12.072 2.216L14.7351 10.2036C14.87 10.6095 14.8541 11.0505 14.6902 11.4456C14.5262 11.8407 14.2253 12.1635 13.8427 12.3547L9.83022 14.3636C11.797 18.7165 15.2835 22.203 19.6364 24.1698L21.6453 20.1573C21.8365 19.7747 22.1593 19.4738 22.5544 19.3098C22.9495 19.1459 23.3905 19.13 23.7964 19.2649L31.784 21.928C32.1381 22.046 32.4462 22.2724 32.6644 22.5752C32.8827 22.878 33.0001 23.2418 33 23.6151V29.4444C33 30.3874 32.6254 31.2918 31.9586 31.9586C31.2918 32.6254 30.3874 33 29.4444 33H27.6667C12.9396 33 1 21.0604 1 6.33333V4.55556Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				<div class="text-3xl"><a target="_blank" href="tel:18314323231" bind:this={phoneContainer}>
          {#each phoneChars as char, i}
            <span class="phone-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
          {/each}
        </a></div>
			</div>
		</div>
	</div>

  <Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Terms of Service" form bind:open={defaultModal} onaction={({ action }) => alert(`Handle "${action}"`)}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>

  {#snippet footer()}
    <Button type="submit" value="success">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>
	


</section>
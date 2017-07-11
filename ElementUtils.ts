class ElementUtil
{
	/**
	 * Checks if element is within another element
	 * @param el element to check
	 * @param closestEl parent element to check against
	 * @returns {boolean}
	 * @constructor
	 */
	public static CLOSEST(el:HTMLElement, closestEl:HTMLElement):boolean
	{
		while (el != closestEl)
		{
			el = <HTMLElement>el.parentNode;

			if (!el) return false;
		}

		return true;
	}

	/**
	 * Select the closest parent with provided class name
	 * @param el current element
	 * @param className class name to find
	 * @returns {any}
	 * @constructor
	 */
	public static CLOSEST_SELECT(el:HTMLElement, className:string):HTMLElement
	{
		let parent = <HTMLElement>el.parentNode;

		while (parent && parent.classList && !parent.classList.contains(className))
		{
			parent = <HTMLElement>parent.parentNode;

			if (parent && parent.classList && parent.classList.contains(className))
			{
				return parent;
			}

			if (!parent) return null;
		}

		return null;
	}
}

export default ElementUtil;